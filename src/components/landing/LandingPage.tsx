"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  ArrowRight,
  ArrowDown,
  Terminal,
  ChevronRight,
  Sparkles,
  RefreshCw,
  Play,
} from "lucide-react";
import { CyberpunkDynamicBackground } from "./CyberpunkDynamicBackground";
import { EvolutionDynamicBackground } from "./EvolutionDynamicBackground";
import { SandboxDynamicBackground } from "./SandboxDynamicBackground";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================
   Storytelling Steps data - Strict Typed
   ============================================ */
interface Stage {
  id: number;
  status: string;
  statusColor: string;
  label: string;
  tagline: string;
  narrative: string;
  cta: string;
}

const STAGES: Stage[] = [
  {
    id: 0,
    status: "UNTRAINED",
    statusColor: "text-red-400 border-red-500/20 bg-red-950/20",
    label: "Khởi tạo Agent",
    tagline: "Bộ não sơ khai của AI",
    narrative: "Một AI Agent khi mới được tạo ra sở hữu năng lực xử lý ngôn ngữ khổng lồ, nhưng hoàn toàn thiếu định hướng. Không có 'skills' bổ trợ, nó giống như một cỗ máy siêu phàm nhưng không có hướng dẫn sử dụng.",
    cta: "Kích hoạt Giao thức Skillbook",
  },
  {
    id: 1,
    status: "UNSTRUCTURED",
    statusColor: "text-amber-400 border-amber-500/20 bg-amber-950/20",
    label: "Hỗn loạn & Sai sót",
    tagline: "Hậu quả khi thiếu Kỹ năng",
    narrative: "Khi nhận yêu cầu viết code tối ưu hay xử lý tác vụ phức tạp, Agent không có skill sẽ đoán mò. Nó lạm dụng kiểu 'any', bỏ qua việc xử lý lỗi, viết code thiếu an toàn và dễ gây sập hệ thống (runtime crash).",
    cta: "Truyền tải Giao thức Strict-Safe",
  },
  {
    id: 2,
    status: "INJECTING PROTOCOL",
    statusColor: "text-blue-400 border-blue-500/20 bg-blue-950/20",
    label: "Nạp Giao thức Skillbook",
    tagline: "Tái cấu trúc tư duy AI",
    narrative: "Chúng ta bắt đầu nạp skill `/typescript-strict` từ Skillbook. Hệ thống lập tức thiết lập các rào chắn (guardrails) tư duy, ép Agent tuân thủ lập trình nghiêm ngặt và giải thích từng bước (Chain of Thought).",
    cta: "Chứng kiến Sự Tiến Hóa",
  },
  {
    id: 3,
    status: "CERTIFIED EXPERT",
    statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-950/20",
    label: "Thức tỉnh & Vượt trội",
    tagline: "Khi AI Agent có Kỹ năng tối tân",
    narrative: "Được trang bị những skill hàng đầu, Agent biến đổi hoàn toàn. Nó viết code type-safe tuyệt đối, tự động kiểm tra lỗi trước khi compile, lập luận logic sâu sắc và đạt hiệu quả công việc vượt trội.",
    cta: "Truy cập Bách Khoa Toàn Thư",
  },
];

/* ============================================
   Milestone 2 Evolution Stage SVG Neon Graphics
   ============================================ */

export function Stage0Graphic(): React.JSX.Element {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center select-none">
      <div className="absolute inset-4 rounded-full bg-red-500/10 blur-xl animate-pulse" />
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <filter id="neon-glow-red" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(239, 68, 68, 0.15)" strokeWidth="1" />
        <circle 
          cx="50" cy="50" r="42" 
          fill="none" 
          stroke="#ef4444" 
          strokeWidth="2.5" 
          strokeDasharray="14 10"
          className="animate-neon-ring-fast origin-center"
          filter="url(#neon-glow-red)"
        />
        <path 
          d="M50 28 C38 28 32 38 36 50 C29 55 30 65 38 70 C42 73 48 72 50 68 C52 72 58 73 62 70 C70 65 71 55 64 50 C68 38 62 28 50 28 Z" 
          fill="none" 
          stroke="rgba(239, 68, 68, 0.4)" 
          strokeWidth="1.5"
        />
        <circle cx="43" cy="42" r="2.5" fill="#ef4444" className="animate-ping" style={{ animationDuration: "1.5s" }} />
        <circle cx="57" cy="42" r="2.5" fill="#ef4444" className="animate-ping" style={{ animationDuration: "2s" }} />
        <circle cx="50" cy="58" r="3.5" fill="#ef4444" />
        <line x1="50" y1="58" x2="43" y2="42" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="50" y1="58" x2="57" y2="42" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

export function Stage1Graphic(): React.JSX.Element {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center select-none">
      <div className="absolute inset-4 rounded-full bg-amber-500/10 blur-xl animate-pulse" />
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <filter id="neon-glow-amber" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="1" />
        <circle 
          cx="50" cy="50" r="42" 
          fill="none" 
          stroke="#f59e0b" 
          strokeWidth="2.5" 
          strokeDasharray="20 12"
          className="animate-neon-ring-reverse origin-center"
          filter="url(#neon-glow-amber)"
        />
        <path d="M28 50 L42 50 L46 38 L54 62 L58 50 L72 50" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="8 6" />
        <path d="M35 35 L45 42 M65 65 L55 58" stroke="rgba(245, 158, 11, 0.5)" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="46" cy="38" r="3" fill="#f59e0b" />
        <circle cx="54" cy="62" r="3" fill="#f59e0b" />
      </svg>
    </div>
  );
}

export function Stage2Graphic(): React.JSX.Element {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center select-none">
      <div className="absolute inset-4 rounded-full bg-blue-500/10 blur-xl animate-pulse" />
      <svg className="w-full h-full animate-spin" style={{ animationDuration: "12s" }} viewBox="0 0 100 100">
        <defs>
          <filter id="neon-glow-blue" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" />
        <circle 
          cx="50" cy="50" r="42" 
          fill="none" 
          stroke="#3b82f6" 
          strokeWidth="2.5" 
          strokeDasharray="30 10"
          className="animate-neon-ring-slow origin-center"
          filter="url(#neon-glow-blue)"
        />
        <circle 
          cx="50" cy="50" r="30" 
          fill="none" 
          stroke="#60a5fa" 
          strokeWidth="1.5" 
          strokeDasharray="10 8"
          className="animate-neon-ring-reverse origin-center"
        />
        <polygon points="50,34 64,42 64,58 50,66 36,58 36,42" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <line x1="50" y1="50" x2="50" y2="34" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="64" y2="58" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="36" y2="58" stroke="#3b82f6" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export function Stage3Graphic(): React.JSX.Element {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center select-none">
      <div className="absolute inset-4 rounded-full bg-emerald-500/10 blur-xl animate-pulse" />
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <filter id="neon-glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" />
        <circle 
          cx="50" cy="50" r="42" 
          fill="none" 
          stroke="#10b981" 
          strokeWidth="3" 
          strokeDasharray="40 8"
          className="animate-neon-ring-fast origin-center"
          filter="url(#neon-glow-emerald)"
        />
        <path d="M50 32 L62 38 L62 52 C62 60 56 66 50 69 C44 66 38 60 38 52 L38 38 Z" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" strokeLinejoin="round" />
        <path d="M45 50 L48 53 L55 45" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#neon-glow-emerald)" />
        <circle cx="50" cy="50" r="2" fill="#fff" className="animate-ping" />
      </svg>
    </div>
  );
}

export function LandingPage(): React.ReactElement {
  const [stage, setStage] = useState<number>(0);
  const [typedCode, setTypedCode] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const simulationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Turn off loader after 300ms (just enough to cover canvas initial shift)
    // then refresh GSAP ScrollTrigger to ensure all pinning coordinates are pristine
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
      const refreshTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 50);
      return () => clearTimeout(refreshTimer);
    }, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(loaderTimer);
    };
  }, []);

  // Handle stage actions & terminal simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timer: NodeJS.Timeout;

    // Reset simulation state when stage changes
    if (simulationTimeoutRef.current) {
      clearTimeout(simulationTimeoutRef.current);
      simulationTimeoutRef.current = null;
    }

    if (stage === 0) {
      timer = setTimeout(() => {
        setTypedCode("// AI Agent đang chờ lệnh...");
        setTerminalLogs([
          "SYSTEM: Initializing AI core...",
          "SYSTEM: Core initialized. Model: Gemini 3.5 Flash (High)",
          "SYSTEM: Kỹ năng bổ trợ: CHƯA CÓ",
          "STATUS: Awaiting user prompt...",
        ]);
      }, 0);
    } else if (stage === 1) {
      timer = setTimeout(() => {
        setIsTyping(true);
        setTerminalLogs([
          "USER: Hãy viết hàm fetch user và trả về data trong TypeScript.",
          "AGENT: Bắt đầu viết code...",
          "WARNING: Kiểu dữ liệu 'any' được phát hiện.",
          "WARNING: Thiếu khối try-catch xử lý lỗi kết nối.",
        ]);

        // Animate bad code writing
        const badCode = `function fetchUser(id: any) {\n  let data: any = api.getUser(id);\n  return data;\n}\n\n// Agent: "Tôi đoán code này sẽ chạy được... chắc thế!"`;
        let i = 0;
        interval = setInterval(() => {
          setTypedCode(badCode.slice(0, i));
          i++;
          if (i > badCode.length) {
            clearInterval(interval);
            setIsTyping(false);
            setTerminalLogs((prev) => [
              ...prev,
              "CRITICAL: Phát hiện nguy cơ lỗi runtime khi API trả về undefined!",
              "STATUS: Code được viết cẩu thả và thiếu type-safety.",
            ]);
          }
        }, 15);
      }, 0);
    } else if (stage === 2) {
      timer = setTimeout(() => {
        setTypedCode("// Đang truyền dữ liệu Skillbook...");
        setTerminalLogs([
          "SYSTEM: Khởi tạo giao thức truyền dữ liệu...",
          "SYSTEM: Đang tải gói /typescript-strict...",
          "SYSTEM: Đang cài đặt rào chắn an toàn (Guardrails)...",
          "SYSTEM: Đang cấu hình luồng tư duy sâu (Chain-of-Thought)...",
          "STATUS: Nạp kỹ năng thành công 100%.",
        ]);
      }, 0);
    } else if (stage === 3) {
      timer = setTimeout(() => {
        setIsTyping(true);
        setTerminalLogs([
          "SYSTEM: Kích hoạt thành công kỹ năng: TypeScript Strict Mode.",
          "USER: Hãy viết hàm fetch user và trả về data trong TypeScript.",
          "AGENT: Khởi chạy quy tắc Strict Mode...",
          "AGENT: Bắt đầu lập luận & khai báo Interface an toàn...",
        ]);

        // Animate perfect type-safe code writing
        const goodCode = `interface User {\n  id: string;\n  name: string;\n}\n\nasync function fetchUser(id: string): Promise<User> {\n  const response = await api.getUser(id);\n  if (!response.ok) {\n    throw new Error(\`Lỗi fetch user: \${response.status}\`);\n  }\n  return response.json() as Promise<User>;\n}\n\n// Agent: "Code hoàn hảo, type-safe 100% ở compile-time."`;
        let i = 0;
        interval = setInterval(() => {
          setTypedCode(goodCode.slice(0, i));
          i++;
          if (i > goodCode.length) {
            clearInterval(interval);
            setIsTyping(false);
            setTerminalLogs((prev) => [
              ...prev,
              "SUCCESS: Code biên dịch thành công với 0 cảnh báo.",
              "STATUS: Tối ưu hóa hiệu năng & an toàn tuyệt đối.",
            ]);
          }
        }, 12);
      }, 0);
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (interval) clearInterval(interval);
      setIsTyping(false);
    };
  }, [stage]);

  const handleNext = (): void => {
    if (stage < 3) {
      setIsSimulating(false);
      setIsTyping(false);
      setStage((prev) => prev + 1);
    }
  };

  const handleReset = (): void => {
    setIsSimulating(false);
    setIsTyping(false);
    setStage(0);
  };

  // Simulate command executions matching currently active evolution stage
  const handleSimulateCommand = (): void => {
    if (isSimulating || isTyping) return;
    setIsSimulating(true);

    const stageLogs: Record<number, string[]> = {
      0: [
        "USER: /search-skills query=\"typescript\"",
        "SYSTEM: Khởi tạo module tìm kiếm cục bộ...",
        "SEARCH: Đang quét cơ sở tri thức cục bộ...",
        "RESULT: Tìm thấy 0 kỹ năng cấu trúc khớp.",
        "WARNING: Tìm kiếm thất bại do thiếu tệp index .agents/index.json.",
        "ERROR: Agent đang chạy ở trạng thái UNTRAINED. Không thể phân tích công cụ.",
        "STATUS: Thất bại. Vui lòng kích hoạt Giao thức Skillbook."
      ],
      1: [
        "USER: /fetch-user-data-unsafe id=\"usr_9921\"",
        "EXEC: Thực thi truy vấn cơ sở dữ liệu không có schema kiểm định...",
        "DB: Query string: SELECT * FROM users WHERE id = 'usr_9921'",
        "WARNING: Trả về dòng dữ liệu thô dạng 'any' không kiểm tra lỗi.",
        "CLIENT: Nhận dữ liệu: { uid: 'usr_9921', profile: null }",
        "CRITICAL: TypeError: Cannot read properties of null (reading 'email')",
        "STATUS: Lỗi thực thi nghiêm trọng. Tiến trình thoát với mã code 500."
      ],
      2: [
        "USER: /inject-skill id=\"typescript-strict\"",
        "SYSTEM: Đang phân tích content/skills/typescript-strict.md...",
        "PARSER: Trích xuất tập hợp quy tắc: noImplicitAny=true, strictNullChecks=true...",
        "SYSTEM: Đang tải cấu trúc dữ liệu JSON-LD AI-Readable...",
        "SUCCESS: Kỹ năng TypeScript Strict Mode đã được liên kết với compiler guardrails.",
        "STATUS: Nạp thành công. Hệ thống chuyển sang trạng thái STRICT-SAFE."
      ],
      3: [
        "USER: /execute-safe-flow task=\"fetch user data with strict validation\"",
        "SYSTEM: Khởi động mạng lưới đa Agent (Multi-Agent Swarm Framework)...",
        "ORCHESTRATOR: Kích hoạt subagent 'M1_Research' và 'M2_Validator'...",
        "M1_RESEARCH: Gửi truy cập bảo mật đến API endpoint...",
        "M2_VALIDATOR: Phân tích và kiểm định dữ liệu thông qua Zod schema...",
        "M2_VALIDATOR: Kiểm định TypeScript Strict thành công. Loại bỏ mọi rủi ro runtime.",
        "SUCCESS: Luồng thực thi an toàn hoàn tất. Trả về: { status: 200, data: User }",
        "STATUS: Hoàn thành tác vụ trong 180ms. Type-safe và tối ưu hóa 100%."
      ]
    };

    const logs = stageLogs[stage] || [];
    setTerminalLogs([]);

    let currentLogIdx = 0;

    const printNextLog = () => {
      if (currentLogIdx < logs.length) {
        setTerminalLogs((prev) => [...prev, logs[currentLogIdx]]);
        currentLogIdx++;
        const delay = Math.random() * 300 + 250;
        simulationTimeoutRef.current = setTimeout(printNextLog, delay);
      } else {
        setIsSimulating(false);
      }
    };

    printNextLog();
  };

  // GSAP Animations with memory cleanup
  useGSAP(() => {
    if (typeof window === "undefined") return;

    // 1. High-Fidelity Floating Glow Orbs - Infinity Floating Loop (Optimized Speed & Dynamic Flow)
    gsap.to(".orb-1", {
      x: "random(-150, 150)",
      y: "random(-100, 150)",
      scale: "random(0.95, 1.2)",
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(".orb-2", {
      x: "random(-160, 120)",
      y: "random(-120, 120)",
      scale: "random(0.9, 1.15)",
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(".orb-3", {
      x: "random(-130, 130)",
      y: "random(-150, 100)",
      scale: "random(0.95, 1.15)",
      duration: 11,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 2. Hero Reveal Title & Visual Explosion Shockwave đồng bộ (Premium Infinite Dynamic Loop)
    const tl = gsap.timeline();

    // Vụ nổ ánh sáng phát quang bùng phát từ tâm Hero Section
    tl.fromTo(
      ".explosion-core",
      { scale: 0, opacity: 0, filter: "blur(40px)" },
      {
        scale: 3.5,
        opacity: 0.9,
        duration: 1.4,
        ease: "power4.out",
        filter: "blur(140px)",
      }
    );

    // Tan biến nhẹ nhàng sang trạng thái lấp lánh xoay tròn & co giãn vô tận ở background
    tl.to(
      ".explosion-core",
      {
        opacity: 0.22, // Giữ độ sáng nền rực rỡ sau nổ để giữ visual cyberpunk lộng lẫy
        scale: 2.8,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          // Xoay nhẹ vô tận để các mảng màu neon gradient liên tục biến đổi lộng lẫy
          gsap.to(".explosion-core", {
            rotation: 360,
            duration: 35,
            repeat: -1,
            ease: "none",
          });
          // Thở nhẹ vô tận
          gsap.to(".explosion-core", {
            scale: 3.2,
            opacity: 0.32,
            duration: 7,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      },
      "<0.8"
    );
    
    // Đồng bộ phóng to dải sáng ngầm của Glow Core theo nhịp bùng nổ và THỞ VÔ TẬN
    tl.fromTo(
      ".hero-glow-core",
      { scale: 0.3, opacity: 0, filter: "blur(120px)" },
      {
        scale: 1.35,
        opacity: 0.75,
        duration: 1.8,
        ease: "power3.out",
        onComplete: () => {
          // Thở nhịp điệu vô tận phía sau tiêu đề chính tạo cảm giác alive cực mạnh
          gsap.to(".hero-glow-core", {
            scale: 1.6,
            opacity: 0.9,
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      },
      "<0.2"
    );

    // Đồng bộ đẩy chữ bay lên (vào nhịp sau 0.4s khi glow bùng phát mạnh mẽ)
    tl.to(
      ".hero-word",
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.05,
        ease: "power4.out",
      },
      "<0.4"
    );

    // 2. Hero Reveal Description & CTA
    gsap.fromTo(
      ".hero-reveal",
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#section-hero",
          start: "top 20%",
          toggleActions: "play none none none",
        }
      }
    );

    // 3. Horizontal Scroll Pinning (Desktop only) với tính toán động và tối ưu hóa
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const track = document.querySelector(".horizontal-track") as HTMLElement;
      if (!track) return;

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const viewWidth = window.innerWidth;
        return trackWidth - viewWidth;
      };

      const pin = ScrollTrigger.create({
        trigger: "#section-evolution",
        pin: true,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        scrub: 1.2, // Tăng nhẹ độ trễ để mang lại hiệu ứng mượt mà khi di chuột
        invalidateOnRefresh: true, // Tự động tính toán lại khi thay đổi kích thước trình duyệt
        onUpdate: (self) => {
          // Sync scroll progress directly to the section parent's custom property for 60fps canvas performance
          const el = document.getElementById("section-evolution");
          if (el) {
            el.style.setProperty("--evolution-progress", self.progress.toString());
          }
        },
        animation: gsap.to(".horizontal-track", {
          x: () => -getScrollAmount(),
          ease: "none",
          force3D: true, // Ép trình duyệt sử dụng tăng tốc GPU 3D
        }),
      });

      return () => {
        pin.kill();
      };
    });

    // 4. Mobile Scroll Progress tracking (without pinning)
    mm.add("(max-width: 767px)", () => {
      const pin = ScrollTrigger.create({
        trigger: "#section-evolution",
        start: "top bottom", // Starts when top of section hits bottom of screen
        end: "bottom top",   // Ends when bottom of section hits top of screen
        scrub: true,
        onUpdate: (self) => {
          const el = document.getElementById("section-evolution");
          if (el) {
            el.style.setProperty("--evolution-progress", self.progress.toString());
          }
        },
      });

      return () => {
        pin.kill();
      };
    });

    // Explicitly revert and kill all GSAP ScrollTriggers upon unmount to prevent leaks
    return () => {
      mm.revert();
      if (simulationTimeoutRef.current) {
        clearTimeout(simulationTimeoutRef.current);
      }
    };
  }, { dependencies: [], scope: containerRef });

  const heroTitleWords = "Kiến Tạo Kỹ Năng Tối Tân Cho AI Agents".split(" ");

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[var(--color-bg-primary)] overflow-x-hidden">
      {/* Premium Cyberpunk Intro Loader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.28, ease: "easeOut" } }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070b13] font-mono select-none"
          >
            {/* Retro radial glow backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.03)_0%,transparent_80%)] pointer-events-none" />
            
            <div className="relative flex flex-col items-center gap-4 text-center">
              {/* Spinning Cyberpunk Neon Indicator */}
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-2 border-white/5" />
                <div 
                  className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[var(--color-cyber-violet)]" 
                  style={{ animation: "spin 1.0s linear infinite" }}
                />
                <div 
                  className="absolute inset-2 rounded-full border-b-2 border-l-2 border-[var(--color-neon-indigo)]" 
                  style={{ animation: "spin 1.5s linear infinite reverse" }}
                />
              </div>

              {/* Glowing Loading Text */}
              <div className="mt-4 flex flex-col items-center gap-1">
                <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-primary)] uppercase animate-pulse">
                  Initializing Agents
                </span>
                <span className="text-[9px] tracking-widest text-[var(--color-text-muted)] uppercase">
                  Skillbook Protocol v0.1.0
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.04)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* High-Fidelity Cyberpunk Floating Glow Orbs & Visual Explosion Core */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* 3 Floating Orbs with premium blur (Optimized Glow Core) */}
        <div className="floating-glow-orb orb-1 absolute w-[35rem] h-[35rem] rounded-full filter blur-[90px] opacity-[0.32] bg-gradient-to-r from-[var(--color-cyber-violet)] to-[var(--color-neon-indigo)] top-[-10%] left-[-10%]" />
        <div className="floating-glow-orb orb-2 absolute w-[30rem] h-[30rem] rounded-full filter blur-[80px] opacity-[0.28] bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-cyber-violet)] top-[40%] right-[-10%]" />
        <div className="floating-glow-orb orb-3 absolute w-[40rem] h-[40rem] rounded-full filter blur-[100px] opacity-[0.25] bg-gradient-to-r from-[var(--color-neon-indigo)] to-[var(--color-accent-secondary)] bottom-[-10%] left-[20%]" />
        
        {/* Visual Explosion Shockwave Core */}
        <div className="explosion-core absolute w-[30rem] h-[30rem] rounded-full filter blur-[80px] bg-gradient-to-r from-[var(--color-cyber-violet)] via-[var(--color-accent-primary)] to-[var(--color-neon-indigo)] top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 mix-blend-screen" />
      </div>

      {/* FLOATING HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[var(--color-bg-glass)] backdrop-blur-md border-b border-[hsla(220,25%,90%,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "py-6 bg-transparent border-b border-transparent"
      }`}>
        <div className="max-w-5xl mx-auto w-full flex justify-between items-center px-6 sm:px-12">
          <Link href="/" className="flex items-center gap-2 group decoration-none">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-glow)] border border-[var(--color-border-accent)] flex items-center justify-center">
              <Sparkles size={16} className="text-[var(--color-accent-primary)] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Skillbook <span className="text-[var(--color-accent-primary)]">Agents</span>
            </span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link href="/skills" className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors decoration-none">
              Thư viện Kỹ năng (Skills)
            </Link>
            <button
              onClick={() => document.getElementById("section-sandbox")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary py-1.5 px-4 text-xs font-mono"
            >
              Trình giả lập Sandbox
            </button>
          </nav>
        </div>
      </header>

      {/* SECTION 1: HERO SECTION */}
      <section id="section-hero" className="hero-section relative min-h-screen flex flex-col justify-between overflow-hidden py-12 px-6 sm:px-12 z-10 pt-32">
        {/* Real-time Dynamic Cyberpunk 3D Grid & Laser Scanning Animation */}
        <CyberpunkDynamicBackground />

        {/* [GLOW CORE ĐỒNG BỘ] */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <div className="glow-core hero-glow-core opacity-0 w-[20rem] h-[20rem] sm:w-[35rem] sm:h-[35rem]" />
        </div>

        <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center items-center text-center my-auto z-10 relative">
          {/* Title word-by-word reveal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
            {heroTitleWords.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-3 py-1">
                <span className="hero-word inline-block translate-y-full opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-200 to-pink-200">
                  {word}
                </span>
              </span>
            ))}
          </h1>
          
          {/* ScrollTrigger reveal description */}
          <p className="hero-reveal opacity-0 text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mb-12 font-sans">
            Bách khoa toàn thư mở lưu trữ và phân loại các kỹ năng (skills) tối ưu dành cho AI Agents, được xây dựng dựa trên các công cụ và quy trình làm việc thực tế của Antigravity.
          </p>

          {/* ScrollTrigger reveal CTA */}
          <div className="hero-reveal opacity-0 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById("section-evolution")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary flex items-center gap-2 text-base font-sans"
            >
              Khám phá tiến hóa Agent
              <ArrowDown size={18} className="animate-bounce" />
            </button>
            <Link href="/skills" className="btn-secondary flex items-center gap-2 text-base font-sans decoration-none">
              Thư viện kỹ năng
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </section>

      {/* SECTION 2: HOW IT WORKS - RESPONSIVE EVOLUTION FLOW */}
      <section id="section-evolution" className="relative bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        {/* Real-time Dynamic Evolution Particle Morphing Canvas */}
        <EvolutionDynamicBackground />
        
        {/* Section Header - Fixed Absolute on Desktop for Premium Parallax Scrolling */}
        <div className="pt-16 pb-8 px-6 sm:px-12 md:px-20 md:absolute md:top-12 md:left-20 md:z-20 md:pt-0 md:pb-0 pointer-events-none">
          <p className="section-title mb-2 flex items-center gap-2">
            <Brain size={14} className="text-[var(--color-accent-primary)]" />
            Sự Tiến Hóa Của AI Agent
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)]">
            Hành Trình Bừng Sáng Tri Thức
          </h2>
        </div>

        {/* DESKTOP VIEW: HORIZONTAL SCROLL (hidden on mobile) */}
        <div className="hidden md:block overflow-hidden">
          <div className="horizontal-track flex w-[400vw] h-screen flex-nowrap relative">
            {STAGES.map((s, idx) => (
              <div
                key={s.id}
                className="w-screen h-screen shrink-0 flex items-center justify-center px-12 md:px-20 relative bg-transparent z-10"
              >
                <div className="max-w-5xl w-full grid grid-cols-12 gap-8 items-center">
                  {/* Big animated SVG graphic on left */}
                  <div className="col-span-4 flex flex-col justify-center items-center relative select-none">
                    {idx === 0 && <Stage0Graphic />}
                    {idx === 1 && <Stage1Graphic />}
                    {idx === 2 && <Stage2Graphic />}
                    {idx === 3 && <Stage3Graphic />}
                    
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-wider uppercase mt-6 ${s.statusColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {s.status}
                    </div>
                  </div>

                  {/* Narrative Content in middle */}
                  <div className="col-span-8 flex flex-col justify-center items-start text-left">
                    <h3 className="text-4xl font-extrabold text-[var(--color-text-primary)] leading-tight mb-4 font-sans">
                      {s.tagline}
                    </h3>
                    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-2xl font-sans">
                      {s.narrative}
                    </p>
                    
                    {/* Stage Indicator */}
                    <div className="flex items-center gap-2 text-sm text-[var(--color-accent-primary)] font-semibold font-sans">
                      <span>{s.label}</span>
                      <div className="w-12 h-px bg-[var(--color-accent-primary)]/50" />
                    </div>
                  </div>
                </div>

                {/* Decorative corner indicator */}
                <div className="absolute bottom-6 right-20 text-xs font-mono text-[var(--color-text-muted)]">
                  Evolution Stage &bull; 0{idx + 1} / 04
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VIEW: VERTICAL TIMELINE FLOW (hidden on desktop) */}
        <div className="block md:hidden px-6 pb-20 relative">
          {/* Glowing vertical timeline line with color transition */}
          <div className="absolute left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-red-500 via-amber-500 via-blue-500 to-emerald-500 opacity-40" />

          <div className="flex flex-col gap-12 relative">
            {STAGES.map((s, idx) => (
              <div key={s.id} className="relative pl-10">
                {/* Glowing timeline node */}
                <div className="absolute left-[-13px] top-4 w-6 h-6 rounded-full bg-[var(--color-bg-primary)] border-2 border-[var(--color-accent-primary)] flex items-center justify-center z-10 shadow-[0_0_10px_rgba(167,139,250,0.3)]">
                  <span className="text-[10px] font-mono font-bold text-[var(--color-accent-primary)]">
                    {idx + 1}
                  </span>
                </div>

                {/* Stage Glass Card with spring Framer Motion animations */}
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="glass-card rounded-xl p-5 border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50 hover:border-[var(--color-border-hover)] transition-all shadow-md relative overflow-hidden group"
                >
                  {/* Subtle backdrop glow */}
                  <div className={`absolute -right-12 -top-12 w-24 h-24 rounded-full blur-2xl opacity-10 transition-opacity group-hover:opacity-25 ${
                    s.id === 0 ? "bg-red-500" :
                    s.id === 1 ? "bg-amber-500" :
                    s.id === 2 ? "bg-blue-500" :
                    "bg-emerald-500"
                  }`} />

                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono tracking-wider uppercase ${s.statusColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {s.status}
                    </div>
                    <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                      Evolution 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] leading-tight mb-2 font-sans">
                    {s.tagline}
                  </h3>
                  
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 font-sans">
                    {s.narrative}
                  </p>

                  {/* Stage indicator with subtle line */}
                  <div className="flex items-center gap-2 text-xs text-[var(--color-accent-primary)] font-semibold mt-2 font-sans">
                    <span>{s.label}</span>
                    <div className="flex-1 h-px bg-[var(--color-accent-primary)]/20" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE SANDBOX SIMULATOR */}
      <section id="section-sandbox" className="relative py-20 px-6 sm:px-12 bg-[var(--color-bg-primary)] overflow-hidden">
        {/* Real-time Dynamic Cyberpunk Digital Rain & Circuit Board Canvas */}
        <SandboxDynamicBackground />
        {/* Soft Vignette Overlay for Sandbox */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-transparent to-[var(--color-bg-primary)] opacity-50 pointer-events-none z-0" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="section-title mb-2 flex items-center justify-center gap-2">
              <Terminal size={14} className="text-[var(--color-accent-primary)]" />
              Interactive Sandbox Simulator
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text-primary)]">
              Trải Nghiệm Trình Giả Lập Agent
            </h2>
            <p className="text-[var(--color-text-secondary)] mt-2 font-sans max-w-xl mx-auto">
              Tương tác trực tiếp với bộ mô phỏng Agent để xem cách các kỹ năng tối tân thay đổi hành vi và mã nguồn của AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Sandbox stages controller */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              {/* Dynamic step chips */}
              <div className="flex flex-wrap items-center gap-2 mb-6 w-full">
                {STAGES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setIsSimulating(false);
                      setIsTyping(false);
                      setStage(s.id);
                    }}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-all duration-300 font-mono ${
                      stage === s.id
                        ? "border-[var(--color-accent-primary)] bg-[var(--color-accent-glow)] text-[var(--color-accent-primary)] font-semibold"
                        : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)]"
                    }`}
                  >
                    0{s.id + 1}. {s.status}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={stage}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full"
                >
                  {/* Badge showing stage status */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-wider uppercase mb-6 ${STAGES[stage].statusColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {STAGES[stage].status}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-sm font-semibold tracking-widest text-[var(--color-accent-primary)] uppercase mb-2">
                    Giai Đoạn 0{stage + 1} &bull; {STAGES[stage].label}
                  </h3>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)] leading-tight mb-4 font-sans">
                    {STAGES[stage].tagline}
                  </h4>

                  {/* Narrative description */}
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-md font-sans">
                    {STAGES[stage].narrative}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full">
                {stage < 3 ? (
                  <button
                    onClick={handleNext}
                    disabled={isTyping}
                    className="btn-primary flex items-center gap-2 text-sm disabled:opacity-50 font-sans"
                  >
                    {STAGES[stage].cta}
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <Link href="/skills" className="btn-primary flex items-center gap-2 text-sm animate-pulse-glow font-sans decoration-none">
                    {STAGES[stage].cta}
                    <ArrowRight size={16} />
                  </Link>
                )}

                {stage > 0 && (
                  <button
                    onClick={handleReset}
                    className="btn-secondary text-sm font-sans"
                  >
                    Thiết lập lại
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Code Terminal - IDE Cyberpunk Redesign */}
            <div className="lg:col-span-7 w-full h-[520px] relative">
              {/* Dynamic Background Shadow Glow */}
              <div className={`absolute -inset-1.5 rounded-2xl blur-2xl opacity-35 transition-all duration-700 pointer-events-none ${
                stage === 0 ? "bg-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.2)]" :
                stage === 1 ? "bg-amber-500/20 shadow-[0_0_50px_rgba(245,158,11,0.2)]" :
                stage === 2 ? "bg-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.2)]" :
                "bg-emerald-500/25 shadow-[0_0_50px_rgba(16,185,129,0.25)]"
              }`} />

              {/* IDE Container */}
              <div className={`absolute inset-0 glass-panel flex flex-col overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] border transition-all duration-500 shadow-2xl ${
                stage === 0 || stage === 1 ? "border-red-500/30" :
                stage === 2 ? "border-amber-500/30" :
                "border-emerald-500/30"
              }`}>
                
                {/* EFFECT: Radar Laser Scan Line */}
                <div 
                  className="laser-scan-line" 
                  style={{
                    "--laser-color": 
                      stage === 0 || stage === 1 ? "#ef4444" :
                      stage === 2 ? "#f59e0b" :
                      "#10b981",
                    background: `linear-gradient(90deg, transparent, ${
                      stage === 0 || stage === 1 ? "#ef4444" :
                      stage === 2 ? "#f59e0b" :
                      "#10b981"
                    }, transparent)`,
                    boxShadow: `0 0 10px ${
                      stage === 0 || stage === 1 ? "#ef4444" :
                      stage === 2 ? "#f59e0b" :
                      "#10b981"
                    }`
                  } as React.CSSProperties}
                />

                {/* 1. IDE TOP UTILITY BAR */}
                <div className="flex items-center justify-between px-4 py-2 bg-[var(--color-bg-tertiary)] border-b border-[var(--color-border)] select-none">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5 mr-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/70" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <span className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-[var(--color-text-muted)]">
                      <span className="hover:text-[var(--color-text-secondary)] cursor-pointer">File</span>
                      <span className="hover:text-[var(--color-text-secondary)] cursor-pointer">Edit</span>
                      <span className="hover:text-[var(--color-text-secondary)] cursor-pointer">View</span>
                      <span className="hover:text-[var(--color-text-secondary)] cursor-pointer">Run</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">
                      Sandbox IDE v3.2.0
                    </span>
                  </div>
                </div>

                {/* 2. TAB CONTROL & FILES */}
                <div className="flex items-center bg-[var(--color-bg-tertiary)] border-b border-[var(--color-border)] select-none text-[11px] font-mono overflow-x-auto scrollbar-none">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-primary)] border-r border-[var(--color-border)] border-t-2 border-[var(--color-accent-primary)] text-[var(--color-text-primary)] font-semibold shrink-0">
                    <Terminal size={12} className="text-[var(--color-accent-primary)]" />
                    <span>agent_sandbox.ts</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 text-[var(--color-text-muted)] border-r border-[var(--color-border)] hover:bg-[var(--color-bg-primary)]/40 hover:text-[var(--color-text-secondary)] cursor-pointer shrink-0">
                    <span>config.json</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 text-[var(--color-text-muted)] hover:bg-[var(--color-bg-primary)]/40 hover:text-[var(--color-text-secondary)] cursor-pointer shrink-0">
                    <span>tests/compiler.spec.ts</span>
                  </div>
                </div>

                {/* 3. SPLIT MAIN CONTAINER: SIDEBAR + EDITOR & TERMINAL */}
                <div className="flex-1 flex min-h-0 font-mono text-sm">
                  
                  {/* 3.1. SIDEBAR FILE EXPLORER (Desktop Only - Width: 18%) */}
                  <div className="hidden sm:flex flex-col w-[18%] bg-[var(--color-bg-tertiary)] border-r border-[var(--color-border)] p-3 text-[10px] select-none text-[var(--color-text-muted)]">
                    <div className="font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-3 flex items-center justify-between">
                      <span>EXPLORER</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-[var(--color-text-secondary)] font-semibold flex items-center gap-1">📁 src</div>
                      <div className="pl-3 flex items-center gap-1 text-[var(--color-text-primary)]">📄 agent_sandbox.ts</div>
                      <div className="pl-3 flex items-center gap-1">📄 utils.ts</div>
                      <div className="text-[var(--color-text-secondary)] font-semibold flex items-center gap-1 mt-2">📁 .agents</div>
                      <div className="pl-3 flex items-center gap-1">📄 rules.json</div>
                    </div>
                  </div>

                  {/* 3.2. RIGHT AREA: EDITOR & CONSOLE OUT */}
                  <div className="flex-1 flex flex-col min-h-0">
                    
                    {/* CODE EDITOR (with Line Numbers) */}
                    <div className="flex-1 p-4 overflow-y-auto bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] relative flex gap-4">
                      <div className="absolute top-2 right-4 text-[9px] text-[var(--color-text-muted)] uppercase tracking-wider select-none font-sans">
                        Typescript Editor
                      </div>
                      
                      {/* Editor Line Numbers */}
                      <div className="text-right text-[var(--color-text-muted)] select-none text-[11px] sm:text-xs leading-relaxed border-r border-[var(--color-border)] pr-2 w-8 shrink-0 flex flex-col">
                        {Array.from({ length: typedCode.split("\n").length || 1 }).map((_, i) => (
                          <span key={i}>{i + 1}</span>
                        ))}
                      </div>

                      {/* Editor Content Area */}
                      <pre className="flex-1 text-left m-0 p-0 text-[11px] sm:text-xs text-[var(--color-text-primary)] leading-relaxed select-text font-mono overflow-x-auto">
                        <code>{typedCode}</code>
                      </pre>
                    </div>

                    {/* SYSTEM CONSOLE LOGS */}
                    <div className="h-48 p-4 overflow-y-auto bg-[var(--color-bg-secondary)] flex flex-col gap-1.5 text-xs select-none">
                      <div className="text-[9px] text-[var(--color-text-muted)] uppercase tracking-wider mb-2 border-b border-[var(--color-border)] pb-1.5 flex items-center justify-between font-sans">
                        <span className="flex items-center gap-1.5">
                          <Terminal size={11} className="animate-pulse" /> Terminal Console
                        </span>
                        
                        {/* Play Simulator Command Button */}
                        <button
                          onClick={handleSimulateCommand}
                          disabled={isSimulating || isTyping}
                          className="px-2.5 py-0.5 rounded border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-glow)] text-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)]/20 transition-all font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 text-[10px]"
                        >
                          {isSimulating ? (
                            <>
                              <RefreshCw size={9} className="animate-spin" />
                              Running...
                            </>
                          ) : (
                            <>
                              <Play size={9} />
                              Execute Simulation
                            </>
                          )}
                        </button>
                      </div>

                      <div className="flex-1 flex flex-col gap-1 overflow-y-auto pr-1">
                        {terminalLogs.map((log, index) => {
                          let logColor = "text-[var(--color-text-secondary)]";
                          if (log.startsWith("SYSTEM:")) logColor = "text-purple-400";
                          else if (log.startsWith("WARNING:")) logColor = "text-amber-400";
                          else if (log.startsWith("CRITICAL:")) logColor = "text-red-400 font-semibold";
                          else if (log.startsWith("SUCCESS:")) logColor = "text-emerald-400 font-semibold";
                          else if (log.startsWith("USER:")) logColor = "text-blue-400";
                          else if (log.startsWith("STATUS:")) logColor = "text-cyan-400 border-t border-[var(--color-border)] pt-1 mt-1 font-semibold";
                          
                          return (
                            <div key={index} className={`flex items-start gap-1.5 ${logColor} leading-relaxed text-[10px] sm:text-[11px]`}>
                              <ChevronRight size={11} className="mt-0.5 shrink-0" />
                              <span>{log}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 max-w-5xl mx-auto w-full flex justify-between items-center text-xs text-[var(--color-text-muted)] py-8 px-6 sm:px-12 border-t border-[var(--color-border)] font-sans">
        <div>
          &copy; {new Date().getFullYear()} Skillbook Agents.
        </div>
        <div className="flex items-center gap-4">
          <Link href="/skills" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors decoration-none">
            Trang chủ Quản lý
          </Link>
          <span className="text-[var(--color-border)]">|</span>
          <span className="text-[var(--color-text-muted)]">
            Aesthetic storytelling flow
          </span>
        </div>
      </footer>
    </div>
  );
}
