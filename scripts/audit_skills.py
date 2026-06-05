import os
import re
import yaml

ROOT_DIR = r"c:\Users\Admin\Desktop\skillbook-agents"
TEMP_DATA_DIR = os.path.join(ROOT_DIR, ".agents", "temp_skills_data")
SKILLS_DIR = os.path.join(ROOT_DIR, "content", "skills")

VALID_CATEGORIES = {
    "reasoning-planning", "code-engineering", "tool-integration",
    "content-communication", "research-analysis", "safety-guardrails",
    "persona-behavior", "workflow-orchestration", "creative-design",
    "data-knowledge", "bioinformatics-genomics"
}

VALID_COMPLEXITIES = {"starter", "intermediate", "advanced", "expert"}

def audit():
    errors = []
    
    # 1. Collect expected slugs from source directories
    builtin_path = os.path.join(TEMP_DATA_DIR, "builtin")
    custom_path = os.path.join(TEMP_DATA_DIR, "custom")
    
    if not os.path.exists(builtin_path):
        print(f"Builtin directory not found at {builtin_path}")
        return [f"Builtin directory not found at {builtin_path}"]
    if not os.path.exists(custom_path):
        print(f"Custom directory not found at {custom_path}")
        return [f"Custom directory not found at {custom_path}"]
        
    builtin_slugs = [d for d in os.listdir(builtin_path) if os.path.isdir(os.path.join(builtin_path, d))]
    custom_slugs = [d for d in os.listdir(custom_path) if os.path.isdir(os.path.join(custom_path, d))]
    
    all_slugs = sorted(builtin_slugs + custom_slugs)
    
    print(f"Found {len(builtin_slugs)} builtin skills, {len(custom_slugs)} custom skills. Total: {len(all_slugs)}")
    
    if len(all_slugs) != 66:
        errors.append(f"Expected 66 skills in total, found {len(all_slugs)}")
        
    # Get all markdown files in content/skills
    all_md_files = [f for f in os.listdir(SKILLS_DIR) if f.endswith(".md")]
    print(f"Total markdown files in content/skills: {len(all_md_files)}")
    
    # Store bodies to check for uniqueness
    vi_bodies = {}
    en_bodies = {}
    
    for slug in all_slugs:
        is_builtin = slug in builtin_slugs
        
        vi_file = os.path.join(SKILLS_DIR, f"{slug}.md")
        en_file = os.path.join(SKILLS_DIR, f"{slug}.en.md")
        
        # Check existence
        if not os.path.exists(vi_file):
            errors.append(f"[{slug}] Vietnamese file missing: {vi_file}")
            continue
        if not os.path.exists(en_file):
            errors.append(f"[{slug}] English file missing: {en_file}")
            continue
            
        # Parse Vietnamese File
        try:
            with open(vi_file, "r", encoding="utf-8") as f:
                content = f.read()
        except Exception as e:
            errors.append(f"[{slug}] Failed to read Vietnamese file: {e}")
            continue
            
        parts = content.split("---")
        if len(parts) < 3:
            errors.append(f"[{slug}] Vietnamese file doesn't have valid frontmatter delimiters (---)")
            continue
            
        fm_raw = parts[1]
        body = "---".join(parts[2:])
        
        try:
            fm = yaml.safe_load(fm_raw)
        except Exception as e:
            errors.append(f"[{slug}] Vietnamese frontmatter is invalid YAML: {e}")
            continue
            
        # Verify Vietnamese frontmatter fields
        required_vi_fields = [
            "slug", "title", "command", "category", "tags", "complexity", "platforms",
            "featured", "description", "oneLiner", "sourceUrl", "sourceAuthor",
            "lastVerified", "relatedSkills", "seoTitle", "seoDescription", "provider"
        ]
        
        for field in required_vi_fields:
            if field not in fm:
                errors.append(f"[{slug}] VI frontmatter missing field: {field}")
                
        # Field values check
        if fm.get("slug") != slug:
            errors.append(f"[{slug}] VI frontmatter 'slug' mismatch: {fm.get('slug')} vs expected {slug}")
            
        if fm.get("provider") != "minimax":
            errors.append(f"[{slug}] VI frontmatter 'provider' must be 'minimax', found: {fm.get('provider')}")
            
        if fm.get("category") not in VALID_CATEGORIES:
            errors.append(f"[{slug}] VI frontmatter 'category' invalid: {fm.get('category')}")
            
        if fm.get("complexity") not in VALID_COMPLEXITIES:
            errors.append(f"[{slug}] VI frontmatter 'complexity' invalid: {fm.get('complexity')}")
            
        if fm.get("featured") is not False:
            errors.append(f"[{slug}] VI frontmatter 'featured' must be false, found: {fm.get('featured')}")
            
        if fm.get("sourceAuthor") != "Minimax":
            errors.append(f"[{slug}] VI frontmatter 'sourceAuthor' must be 'Minimax', found: {fm.get('sourceAuthor')}")
            
        if fm.get("lastVerified") != "2026-06-03":
            errors.append(f"[{slug}] VI frontmatter 'lastVerified' must be '2026-06-03', found: {fm.get('lastVerified')}")
            
        # check seoTitle format
        expected_seo_title = f"{fm.get('title')} - Minimax Skill for AI Agents"
        if fm.get("seoTitle") != expected_seo_title:
            errors.append(f"[{slug}] VI frontmatter 'seoTitle' format mismatch: {fm.get('seoTitle')} vs {expected_seo_title}")
            
        # check command rules
        cmd = fm.get("command")
        if is_builtin:
            if not isinstance(cmd, str) or not cmd.startswith("/"):
                errors.append(f"[{slug}] Builtin skill command must start with '/', found: {cmd}")
        else:
            if cmd != "":
                errors.append(f"[{slug}] Custom skill command must be empty string '', found: {cmd}")
                
        # Verify relatedSkills exist
        related = fm.get("relatedSkills", [])
        if not isinstance(related, list) or len(related) < 2 or len(related) > 3:
            errors.append(f"[{slug}] VI frontmatter 'relatedSkills' must be list of 2-3 items, found: {related}")
        else:
            for r_slug in related:
                r_vi_file = os.path.join(SKILLS_DIR, f"{r_slug}.md")
                if not os.path.exists(r_vi_file):
                    errors.append(f"[{slug}] VI frontmatter 'relatedSkills' references non-existent slug: {r_slug}")
                    
        # Verify headers in Vietnamese body
        vi_headers = [
            "## 🧠 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?",
            "## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy",
            "## 📜 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)",
            "## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)"
        ]
        for header in vi_headers:
            if header not in body:
                errors.append(f"[{slug}] VI body missing header: {header}")
                
        # Check for placeholder/dummy patterns
        placeholders = ["TODO", "placeholder", "dummy", "lorem ipsum", "dữ liệu giả"]
        for p in placeholders:
            if p.lower() in body.lower() or p.lower() in fm_raw.lower():
                errors.append(f"[{slug}] VI contains placeholder: {p}")
                
        # Check body uniqueness
        norm_body = re.sub(r'\s+', ' ', body).strip()
        if norm_body in vi_bodies.values():
            duplicate_slugs = [k for k, v in vi_bodies.items() if v == norm_body]
            errors.append(f"[{slug}] VI body is identical to body of {duplicate_slugs}")
        vi_bodies[slug] = norm_body
        
        # Parse English File
        try:
            with open(en_file, "r", encoding="utf-8") as f:
                content_en = f.read()
        except Exception as e:
            errors.append(f"[{slug}] Failed to read English file: {e}")
            continue
            
        parts_en = content_en.split("---")
        if len(parts_en) < 3:
            errors.append(f"[{slug}] English file doesn't have valid frontmatter delimiters (---)")
            continue
            
        fm_raw_en = parts_en[1]
        body_en = "---".join(parts_en[2:])
        
        try:
            fm_en = yaml.safe_load(fm_raw_en)
        except Exception as e:
            errors.append(f"[{slug}] English frontmatter is invalid YAML: {e}")
            continue
            
        # English frontmatter must contain: title, description, oneLiner, seoTitle, seoDescription
        required_en_fields = ["title", "description", "oneLiner", "seoTitle", "seoDescription"]
        for field in required_en_fields:
            if field not in fm_en:
                errors.append(f"[{slug}] EN frontmatter missing field: {field}")
                
        # English frontmatter should be minimal (should not contain fields like slug, command, category, tags, complexity, etc.)
        forbidden_en_fields = ["slug", "command", "category", "tags", "complexity", "platforms", "featured", "provider", "relatedSkills", "sourceUrl", "sourceAuthor", "lastVerified"]
        for field in forbidden_en_fields:
            if field in fm_en:
                errors.append(f"[{slug}] EN frontmatter contains extra/non-minimal field: {field}")
                
        # Verify English body headers
        en_headers = [
            "## 🧠 Why Do We Need This Skill?",
            "## ⚙️ How It Works",
            "## 📜 Agent Guidelines (Prompt Guidelines)",
            "## ⚠️ Gotchas and notes"
        ]
        for header in en_headers:
            if header not in body_en:
                errors.append(f"[{slug}] EN body missing header: {header}")
                
        # Check for placeholder/dummy patterns in English
        for p in placeholders:
            if p.lower() in body_en.lower() or p.lower() in fm_raw_en.lower():
                errors.append(f"[{slug}] EN contains placeholder: {p}")
                
        # Check EN body uniqueness
        norm_body_en = re.sub(r'\s+', ' ', body_en).strip()
        if norm_body_en in en_bodies.values():
            duplicate_slugs_en = [k for k, v in en_bodies.items() if v == norm_body_en]
            errors.append(f"[{slug}] EN body is identical to body of {duplicate_slugs_en}")
        en_bodies[slug] = norm_body_en
        
    print(f"\nAudit complete. Found {len(errors)} error(s).")
    for err in errors[:20]:
        print(f"  - {err}")
    if len(errors) > 20:
        print(f"  ... and {len(errors) - 20} more errors.")
        
    return errors

if __name__ == "__main__":
    audit()
