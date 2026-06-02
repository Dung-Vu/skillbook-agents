"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, ChevronRight, Play, RefreshCw } from "lucide-react";

interface SandboxIDEProps {
  stage: number;
  onTypingChange: (isTyping: boolean) => void;
}

const TERMINAL_THEMES = {
  dracula: {
    name: "Dracula",
    outerBg: "bg-[#282a36]",
    editorBg: "bg-[#1d1f27]",
    consoleBg: "bg-[#282a36]",
    explorerBg: "bg-[#1d1f27]",
    utilityBg: "bg-[#21222c]",
    tabActiveBg: "bg-[#1d1f27]",
    tabHoverBg: "hover:bg-[#1d1f27]",
    tabActiveBorder: "border-t-2 border-t-[#bd93f9]",
    tabInactiveBg: "bg-[#21222c]",
    textMain: "text-[#f8f8f2]",
    textMuted: "text-[#6272a4]",
    textSecondary: "text-[#bd93f9]",
    border: "border-[#44475a]/50",
    accentText: "text-[#50fa7b]",
    accentBorder: "border-[#50fa7b]/30",
    accentBg: "bg-[#50fa7b]/10",
    accentHoverBg: "hover:bg-[#50fa7b]/20",
    laserColor: "#bd93f9",
    glowClass: "bg-[#bd93f9]/20 shadow-[0_0_50px_rgba(189,147,249,0.2)]",
    statusDot: "bg-[#50fa7b]",
    scrollbarClass: "scrollbar-thin scrollbar-thumb-[#44475a] scrollbar-track-[#1d1f27]",
    logColors: {
      system: "text-[#bd93f9]",
      warning: "text-[#ffb86c]",
      error: "text-[#ff5555] font-semibold",
      success: "text-[#50fa7b] font-semibold",
      user: "text-[#8be9fd]",
      status: "text-[#ff79c6]",
      search: "text-[#ff5555]",
      db: "text-[#ffb86c]",
      analyzer: "text-[#8be9fd]",
      coordinator: "text-[#50fa7b]",
      default: "text-[#f8f8f2]"
    }
  },
  matrix: {
    name: "Matrix",
    outerBg: "bg-[#050205]",
    editorBg: "bg-[#020102]",
    consoleBg: "bg-[#050205]",
    explorerBg: "bg-[#020102]",
    utilityBg: "bg-[#050205]",
    tabActiveBg: "bg-[#020102]",
    tabHoverBg: "hover:bg-[#020102]",
    tabActiveBorder: "border-t-2 border-t-[#00ff41]",
    tabInactiveBg: "bg-[#050205]",
    textMain: "text-[#00ff41]",
    textMuted: "text-[#008f11]",
    textSecondary: "text-[#00ff41]/90",
    border: "border-[#00ff41]/20",
    accentText: "text-[#00ff41]",
    accentBorder: "border-[#00ff41]/30",
    accentBg: "bg-[#00ff41]/10",
    accentHoverBg: "hover:bg-[#00ff41]/20",
    laserColor: "#00ff41",
    glowClass: "bg-[#00ff41]/10 shadow-[0_0_50px_rgba(0,255,65,0.15)]",
    statusDot: "bg-[#00ff41]",
    scrollbarClass: "scrollbar-thin scrollbar-thumb-[#008f11]/50 scrollbar-track-[#020102]",
    logColors: {
      system: "text-[#00ff41] brightness-125",
      warning: "text-[#00ff41]/80",
      error: "text-[#00ff41] font-semibold underline decoration-dotted",
      success: "text-[#00ff41] font-bold",
      user: "text-[#00ff41]",
      status: "text-[#00ff41]",
      search: "text-[#00ff41]/95",
      db: "text-[#00ff41]/85",
      analyzer: "text-[#00ff41]/90",
      coordinator: "text-[#00ff41]/95",
      default: "text-[#008f11]"
    }
  },
  amber: {
    name: "Amber",
    outerBg: "bg-[#0a0500]",
    editorBg: "bg-[#060300]",
    consoleBg: "bg-[#0a0500]",
    explorerBg: "bg-[#060300]",
    utilityBg: "bg-[#0a0500]",
    tabActiveBg: "bg-[#060300]",
    tabHoverBg: "hover:bg-[#060300]",
    tabActiveBorder: "border-t-2 border-t-[#ffb000]",
    tabInactiveBg: "bg-[#0a0500]",
    textMain: "text-[#ffb000]",
    textMuted: "text-[#8b6508]",
    textSecondary: "text-[#ffb000]/90",
    border: "border-[#ffb000]/20",
    accentText: "text-[#ffb000]",
    accentBorder: "border-[#ffb000]/30",
    accentBg: "bg-[#ffb000]/10",
    accentHoverBg: "hover:bg-[#ffb000]/20",
    laserColor: "#ffb000",
    glowClass: "bg-[#ffb000]/10 shadow-[0_0_50px_rgba(255,176,0,0.15)]",
    statusDot: "bg-[#ffb000]",
    scrollbarClass: "scrollbar-thin scrollbar-thumb-[#8b6508]/50 scrollbar-track-[#060300]",
    logColors: {
      system: "text-[#ffb000] brightness-125",
      warning: "text-[#ffb000]/80",
      error: "text-[#ffb000] font-semibold underline decoration-dotted",
      success: "text-[#ffb000] font-bold",
      user: "text-[#ffb000]",
      status: "text-[#ffb000]",
      search: "text-[#ffb000]/95",
      db: "text-[#ffb000]/85",
      analyzer: "text-[#ffb000]/90",
      coordinator: "text-[#ffb000]/95",
      default: "text-[#8b6508]"
    }
  },
  cyberpunk: {
    name: "Cyberpunk",
    outerBg: "bg-[#120024]",
    editorBg: "bg-[#07000e]",
    consoleBg: "bg-[#120024]",
    explorerBg: "bg-[#07000e]",
    utilityBg: "bg-[#120024]",
    tabActiveBg: "bg-[#07000e]",
    tabHoverBg: "hover:bg-[#07000e]",
    tabActiveBorder: "border-t-2 border-t-[#ff0055]",
    tabInactiveBg: "bg-[#120024]",
    textMain: "text-[#00f0ff]",
    textMuted: "text-[#7b2cbf]",
    textSecondary: "text-[#ff0055]",
    border: "border-[#ff0055]/30",
    accentText: "text-[#00f0ff]",
    accentBorder: "border-[#ff0055]/30",
    accentBg: "bg-[#ff0055]/10",
    accentHoverBg: "hover:bg-[#ff0055]/20",
    laserColor: "#ff0055",
    glowClass: "bg-[#ff0055]/20 shadow-[0_0_50px_rgba(255,0,85,0.2)]",
    statusDot: "bg-[#00f0ff]",
    scrollbarClass: "scrollbar-thin scrollbar-thumb-[#ff0055]/40 scrollbar-track-[#07000e]",
    logColors: {
      system: "text-purple-400",
      warning: "text-amber-400",
      error: "text-red-400 font-semibold",
      success: "text-emerald-400 font-semibold",
      user: "text-blue-400",
      status: "text-cyan-400",
      search: "text-red-400",
      db: "text-amber-400",
      analyzer: "text-blue-400",
      coordinator: "text-emerald-400",
      default: "text-[#00f0ff]"
    }
  }
} as const;

type ThemeKey = keyof typeof TERMINAL_THEMES;

export function SandboxIDE({ stage, onTypingChange }: SandboxIDEProps): React.ReactElement {
  const [typedCode, setTypedCode] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState<ThemeKey>("cyberpunk");
  const simulationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load saved theme on mount safely
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("sandbox-terminal-theme") as ThemeKey;
      if (savedTheme && TERMINAL_THEMES[savedTheme]) {
        setTimeout(() => {
          setActiveTheme(savedTheme);
        }, 0);
      }
    } catch (e) {
      console.error("Error loading theme from localStorage:", e);
    }
  }, []);

  const handleThemeChange = (newTheme: ThemeKey) => {
    setActiveTheme(newTheme);
    try {
      localStorage.setItem("sandbox-terminal-theme", newTheme);
    } catch (e) {
      console.error("Error saving theme to localStorage:", e);
    }
  };

  const theme = TERMINAL_THEMES[activeTheme] || TERMINAL_THEMES.cyberpunk;

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    const resetTimer = setTimeout(() => {
      setIsSimulating(false);
    }, 0);

    if (stage === 0) {
      timer = setTimeout(() => {
        setTypedCode("// AI Agent đang chờ lệnh...");
        setTerminalLogs([
          "HỆ THỐNG: Đang khởi tạo lõi AI...",
          "HỆ THỐNG: Lõi AI đã sẵn sàng. Mô hình: Gemini 3.5 Flash (High)",
          "HỆ THỐNG: Kỹ năng bổ trợ: CHƯA CÓ",
          "TRẠNG THÁI: Đang chờ lệnh người dùng...",
        ]);
      }, 0);
    } else if (stage === 1) {
      timer = setTimeout(() => {
        setIsTyping(true);
        onTypingChange(true);
        setTerminalLogs([
          "NGƯỜI DÙNG: Hãy viết hàm fetch user và trả về data trong TypeScript.",
          "AGENT: Bắt đầu viết code...",
          "CẢNH BÁO: Kiểu dữ liệu 'any' được phát hiện.",
          "CẢNH BÁO: Thiếu khối try-catch xử lý lỗi kết nối.",
        ]);

        const badCode = `function fetchUser(id: any) {\n  let data: any = api.getUser(id);\n  return data;\n}\n\n// Agent: "Tôi đoán code này sẽ chạy được... chắc thế!"`;
        let i = 0;
        interval = setInterval(() => {
          setTypedCode(badCode.slice(0, i));
          i++;
          if (i > badCode.length) {
            clearInterval(interval);
            setIsTyping(false);
            onTypingChange(false);
            setTerminalLogs((prev) => [
              ...prev,
              "NGHIÊM TRỌNG: Phát hiện nguy cơ lỗi runtime khi API trả về undefined!",
              "TRẠNG THÁI: Code được viết cẩu thả và thiếu type-safety.",
            ]);
          }
        }, 15);
      }, 0);
    } else if (stage === 2) {
      timer = setTimeout(() => {
        setTypedCode("// Đang truyền dữ liệu Skillbook...");
        setTerminalLogs([
          "HỆ THỐNG: Khởi tạo giao thức truyền dữ liệu...",
          "HỆ THỐNG: Đang tải gói /typescript-strict...",
          "HỆ THỐNG: Đang cài đặt rào chắn an toàn (Guardrails)...",
          "HỆ THỐNG: Đang cấu hình luồng tri thức sâu (Chain-of-Thought)...",
          "TRẠNG THÁI: Nạp kỹ năng thành công 100%.",
        ]);
      }, 0);
    } else if (stage === 3) {
      timer = setTimeout(() => {
        setIsTyping(true);
        onTypingChange(true);
        setTerminalLogs([
          "HỆ THỐNG: Kích hoạt thành công kỹ năng: TypeScript Strict Mode.",
          "NGƯỜI DÙNG: Hãy viết hàm fetch user và trả về data trong TypeScript.",
          "AGENT: Khởi chạy quy tắc Strict Mode...",
          "AGENT: Bắt đầu lập luận & khai báo Interface an toàn...",
        ]);

        const goodCode = `interface User {\n  id: string;\n  name: string;\n}\n\nasync function fetchUser(id: string): Promise<User> {\n  const response = await api.getUser(id);\n  if (!response.ok) {\n    throw new Error(\`Lỗi fetch user: \${response.status}\`);\n  }\n  return response.json() as Promise<User>;\n}\n\n// Agent: "Code hoàn hảo, type-safe 100% ở compile-time."`;
        let i = 0;
        interval = setInterval(() => {
          setTypedCode(goodCode.slice(0, i));
          i++;
          if (i > goodCode.length) {
            clearInterval(interval);
            setIsTyping(false);
            onTypingChange(false);
            setTerminalLogs((prev) => [
              ...prev,
              "THÀNH CÔNG: Code biên dịch thành công với 0 cảnh báo.",
              "TRẠNG THÁI: Tối ưu hóa hiệu năng & an toàn tuyệt đối.",
            ]);
          }
        }, 12);
      }, 0);
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (interval) clearInterval(interval);
      if (resetTimer) clearTimeout(resetTimer);
      setIsTyping(false);
      onTypingChange(false);
    };
  }, [stage, onTypingChange]);

  const handleSimulateCommand = (): void => {
    if (isSimulating || isTyping) return;
    setIsSimulating(true);

    const stageLogs: Record<number, string[]> = {
      0: [
        "NGƯỜI DÙNG: /search-skills query=\"typescript\"",
        "HỆ THỐNG: Khởi tạo module tìm kiếm cục bộ...",
        "TÌM KIẾM: Đang quét cơ sở tri thức cục bộ...",
        "KẾT QUẢ: Tìm thấy 0 kỹ năng cấu trúc khớp.",
        "CẢNH BÁO: Tìm kiếm thất bại do thiếu tệp index .agents/index.json.",
        "LỖI: Agent đang chạy ở trạng thái UNTRAINED. Không thể phân tích công cụ.",
        "TRẠNG THÁI: Thất bại. Vui lòng kích hoạt Giao thức Skillbook."
      ],
      1: [
        "NGƯỜI DÙNG: /fetch-user-data-unsafe id=\"usr_9921\"",
        "THỰC THI: Thực thi truy vấn cơ sở dữ liệu không có schema kiểm định...",
        "CƠ SỞ DỮ LIỆU: Query string: SELECT * FROM users WHERE id = 'usr_9921'",
        "CẢNH BÁO: Trả về dòng dữ liệu thô dạng 'any' không kiểm tra lỗi.",
        "CLIENT: Nhận dữ liệu: { uid: 'usr_9921', profile: null }",
        "NGHIÊM TRỌNG: TypeError: Cannot read properties of null (reading 'email')",
        "TRẠNG THÁI: Lỗi thực thi nghiêm trọng. Tiến trình thoát với mã code 500."
      ],
      2: [
        "NGƯỜI DÙNG: /inject-skill id=\"typescript-strict\"",
        "HỆ THỐNG: Đang phân tích content/skills/typescript-strict.md...",
        "BỘ PHÂN TÍCH: Trích xuất tập hợp quy tắc: noImplicitAny=true, strictNullChecks=true...",
        "HỆ THỐNG: Đang tải cấu trúc dữ liệu JSON-LD AI-Readable...",
        "THÀNH CÔNG: Kỹ năng TypeScript Strict Mode đã được liên kết với compiler guardrails.",
        "TRẠNG THÁI: Nạp thành công. Hệ thống chuyển sang trạng thái STRICT-SAFE."
      ],
      3: [
        "NGƯỜI DÙNG: /execute-safe-flow task=\"fetch user data with strict validation\"",
        "HỆ THỐNG: Khởi động mạng lưới đa Agent (Multi-Agent Swarm Framework)...",
        "ĐIỀU PHỐI: Kích hoạt subagent 'M1_Research' và 'M2_Validator'...",
        "M1_RESEARCH: Gửi truy cập bảo mật đến API endpoint...",
        "M2_VALIDATOR: Phân tích và kiểm định dữ liệu thông qua Zod schema...",
        "M2_VALIDATOR: Kiểm định TypeScript Strict thành công. Loại bỏ mọi rủi ro runtime.",
        "THÀNH CÔNG: Luồng thực thi an toàn hoàn tất. Trả về: { status: 200, data: User }",
        "TRẠNG THÁI: Hoàn thành tác vụ trong 180ms. Type-safe và tối ưu hóa 100%."
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

  useEffect(() => {
    return () => {
      if (simulationTimeoutRef.current) {
        clearTimeout(simulationTimeoutRef.current);
      }
    };
  }, []);

  const linesToRender = isMobile ? typedCode.split("\n").slice(0, 12) : typedCode.split("\n");
  const renderedCode = linesToRender.join("\n");

  return (
    <div className="lg:col-span-7 w-full h-[450px] sm:h-[520px] relative">
      <div className={`absolute -inset-1.5 rounded-2xl blur-2xl opacity-35 transition-all duration-700 pointer-events-none ${theme.glowClass}`} />

      <div className={`absolute inset-0 glass-panel flex flex-col overflow-hidden rounded-2xl ${theme.outerBg} border ${theme.border} transition-all duration-500 shadow-2xl`}>
        
        <div 
          className="laser-scan-line transition-all duration-500" 
          style={{
            "--laser-color": theme.laserColor,
            background: `linear-gradient(90deg, transparent, ${theme.laserColor}, transparent)`,
            boxShadow: `0 0 10px ${theme.laserColor}`
          } as React.CSSProperties}
        />

        {/* IDE Top Utility Bar */}
        <div className={`flex items-center justify-between px-4 py-2 ${theme.utilityBg} border-b ${theme.border} select-none transition-all duration-500`}>
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className={`hidden sm:flex items-center gap-4 text-[10px] font-mono ${theme.textMuted} transition-all duration-500`}>
              <span className={`hover:${theme.textSecondary} cursor-pointer transition-colors duration-300`}>File</span>
              <span className={`hover:${theme.textSecondary} cursor-pointer transition-colors duration-300`}>Edit</span>
              <span className={`hover:${theme.textSecondary} cursor-pointer transition-colors duration-300`}>View</span>
              <span className={`hover:${theme.textSecondary} cursor-pointer transition-colors duration-300`}>Run</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${theme.statusDot} animate-ping`} />
            <span className={`text-[10px] font-mono ${theme.textMuted} uppercase tracking-wider transition-all duration-500`}>
              Sandbox IDE v3.2.0
            </span>
          </div>
        </div>

        {/* Tab Control */}
        <div className={`flex items-center ${theme.utilityBg} border-b ${theme.border} select-none text-[11px] font-mono overflow-x-auto scrollbar-none transition-all duration-500`}>
          <div className={`flex items-center gap-2 px-4 py-2 ${theme.tabActiveBg} border-r ${theme.border} ${theme.tabActiveBorder} ${theme.textMain} font-semibold shrink-0 transition-all duration-500`}>
            <TerminalIcon size={12} className={`${theme.accentText} transition-all duration-500`} />
            <span>agent_sandbox.ts</span>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 ${theme.textMuted} border-r ${theme.border} ${theme.tabHoverBg} hover:${theme.textMain} cursor-pointer shrink-0 transition-all duration-500`}>
            <span>config.json</span>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 ${theme.textMuted} ${theme.tabHoverBg} hover:${theme.textMain} cursor-pointer shrink-0 transition-all duration-500`}>
            <span>tests/compiler.spec.ts</span>
          </div>
        </div>

        {/* Editor Workspace */}
        <div className="flex-1 flex min-w-0 min-h-0 font-mono text-sm">
          {/* File Explorer Sidebar */}
          <div className={`hidden sm:flex flex-col w-[18%] ${theme.explorerBg} border-r ${theme.border} p-3 text-[10px] select-none ${theme.textMuted} transition-all duration-500`}>
            <div className={`font-bold uppercase tracking-wider ${theme.textSecondary} mb-3 flex items-center justify-between transition-all duration-500`}>
              <span>EXPLORER</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className={`${theme.textSecondary} font-semibold flex items-center gap-1 transition-all duration-500`}>📁 src</div>
              <div className={`pl-3 flex items-center gap-1 ${theme.textMain} transition-all duration-500`}>📄 agent_sandbox.ts</div>
              <div className="pl-3 flex items-center gap-1">📄 utils.ts</div>
              <div className={`${theme.textSecondary} font-semibold flex items-center gap-1 mt-2 transition-all duration-500`}>📁 .agents</div>
              <div className="pl-3 flex items-center gap-1">📄 rules.json</div>
            </div>
          </div>

          {/* Editor & Console */}
          <div className="flex-1 flex flex-col min-w-0 min-h-0">
            {/* Editor Window */}
            <div className={`flex-1 p-4 overflow-y-auto ${theme.scrollbarClass} ${theme.editorBg} border-b ${theme.border} relative flex gap-4 min-w-0 transition-all duration-500`}>
              <div className={`absolute top-2 right-4 text-[9px] ${theme.textMuted} uppercase tracking-wider select-none font-sans transition-all duration-500`}>
                TypeScript Editor
              </div>
              
              <div className={`text-right ${theme.textMuted} select-none text-[10px] sm:text-[11px] leading-relaxed border-r ${theme.border} pr-2 w-8 shrink-0 flex flex-col transition-all duration-500`}>
                {Array.from({ length: linesToRender.length || 1 }).map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>

              <pre className={`flex-1 text-left m-0 p-0 text-[10px] sm:text-[11px] ${theme.textMain} leading-relaxed select-text font-mono overflow-x-auto ${theme.scrollbarClass} min-w-0 whitespace-pre-wrap break-all sm:whitespace-pre sm:break-normal transition-all duration-500`}>
                <code>{renderedCode}</code>
              </pre>
            </div>

            {/* System Console */}
            <div className={`h-36 sm:h-48 p-4 overflow-hidden ${theme.consoleBg} flex flex-col gap-1.5 text-xs select-none transition-all duration-500`}>
              <div className={`text-[9px] ${theme.textMuted} uppercase tracking-wider mb-2 border-b ${theme.border} pb-1.5 flex items-center justify-between font-sans transition-all duration-500`}>
                <span className="flex items-center gap-1.5">
                  <TerminalIcon size={11} className="animate-pulse" /> Terminal Console
                </span>
                
                <div className="flex items-center gap-2">
                  <select
                    value={activeTheme}
                    onChange={(e) => handleThemeChange(e.target.value as ThemeKey)}
                    className={`px-2 py-0.5 bg-transparent border ${theme.border} ${theme.textMain} font-mono text-[9px] rounded cursor-pointer outline-none transition-all duration-300 focus:border-opacity-100`}
                  >
                    {Object.entries(TERMINAL_THEMES).map(([key, config]) => (
                      <option key={key} value={key} className={config.editorBg}>
                        {config.name}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={handleSimulateCommand}
                    disabled={isSimulating || isTyping}
                    className={`px-2.5 py-0.5 rounded border ${theme.accentBorder} ${theme.accentBg} ${theme.accentText} ${theme.accentHoverBg} transition-all duration-300 font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 text-[10px]`}
                  >
                    {isSimulating ? (
                      <>
                        <RefreshCw size={9} className="animate-spin" />
                        Đang chạy...
                      </>
                    ) : (
                      <>
                        <Play size={9} />
                        Chạy Mô Phỏng
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className={`flex-1 flex flex-col gap-1 overflow-y-auto ${theme.scrollbarClass} pr-1`}>
                {terminalLogs.map((log, index) => {
                  if (typeof log !== "string" || !log) return null;
                  let logColor: string = theme.logColors.default;
                  if (log.startsWith("HỆ THỐNG:")) logColor = theme.logColors.system;
                  else if (log.startsWith("CẢNH BÁO:")) logColor = theme.logColors.warning;
                  else if (log.startsWith("NGHIÊM TRỌNG:")) logColor = theme.logColors.error;
                  else if (log.startsWith("THÀNH CÔNG:")) logColor = theme.logColors.success;
                  else if (log.startsWith("NGƯỜI DÙNG:")) logColor = theme.logColors.user;
                  else if (log.startsWith("TRẠNG THÁI:")) logColor = `${theme.logColors.status} border-t ${theme.border} pt-1 mt-1 font-semibold`;
                  else if (log.startsWith("TÌM KIẾM:") || log.startsWith("KẾT QUẢ:") || log.startsWith("LỖI:")) logColor = theme.logColors.search;
                  else if (log.startsWith("THỰC THI:") || log.startsWith("CƠ SỞ DỮ LIỆU:") || log.startsWith("CLIENT:")) logColor = theme.logColors.db;
                  else if (log.startsWith("BỘ PHÂN TÍCH:")) logColor = theme.logColors.analyzer;
                  else if (log.startsWith("ĐIỀU PHỐI:") || log.startsWith("M1_RESEARCH:") || log.startsWith("M2_VALIDATOR:")) logColor = theme.logColors.coordinator;
                  
                  return (
                    <div key={index} className={`flex items-start gap-1.5 ${logColor} leading-relaxed text-[10px] sm:text-[11px] whitespace-pre-wrap break-all sm:whitespace-normal sm:break-normal transition-all duration-300`}>
                      <ChevronRight size={11} className="mt-0.5 shrink-0" />
                      <span className="flex-1 min-w-0 break-words whitespace-normal">{log}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
