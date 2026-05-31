"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, ChevronRight, Play, RefreshCw } from "lucide-react";

interface SandboxIDEProps {
  stage: number;
  onTypingChange: (isTyping: boolean) => void;
}

export function SandboxIDE({ stage, onTypingChange }: SandboxIDEProps): React.ReactElement {
  const [typedCode, setTypedCode] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const simulationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
          "HỆ THỐNG: Đang cấu hình luồng tư duy sâu (Chain-of-Thought)...",
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
      <div className={`absolute -inset-1.5 rounded-2xl blur-2xl opacity-35 transition-all duration-700 pointer-events-none ${
        stage === 0 ? "bg-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.2)]" :
        stage === 1 ? "bg-amber-500/20 shadow-[0_0_50px_rgba(245,158,11,0.2)]" :
        stage === 2 ? "bg-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.2)]" :
        "bg-emerald-500/25 shadow-[0_0_50px_rgba(16,185,129,0.25)]"
      }`} />

      <div className={`absolute inset-0 glass-panel flex flex-col overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] border transition-all duration-500 shadow-2xl ${
        stage === 0 || stage === 1 ? "border-red-500/30" :
        stage === 2 ? "border-amber-500/30" :
        "border-emerald-500/30"
      }`}>
        
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

        {/* IDE Top Utility Bar */}
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

        {/* Tab Control */}
        <div className="flex items-center bg-[var(--color-bg-tertiary)] border-b border-[var(--color-border)] select-none text-[11px] font-mono overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-primary)] border-r border-[var(--color-border)] border-t-2 border-[var(--color-accent-primary)] text-[var(--color-text-primary)] font-semibold shrink-0">
            <TerminalIcon size={12} className="text-[var(--color-accent-primary)]" />
            <span>agent_sandbox.ts</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-[var(--color-text-muted)] border-r border-[var(--color-border)] hover:bg-[var(--color-bg-primary)]/40 hover:text-[var(--color-text-secondary)] cursor-pointer shrink-0">
            <span>config.json</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-[var(--color-text-muted)] hover:bg-[var(--color-bg-primary)]/40 hover:text-[var(--color-text-secondary)] cursor-pointer shrink-0">
            <span>tests/compiler.spec.ts</span>
          </div>
        </div>

        {/* Editor Workspace */}
        <div className="flex-1 flex min-w-0 min-h-0 font-mono text-sm">
          {/* File Explorer Sidebar */}
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

          {/* Editor & Console */}
          <div className="flex-1 flex flex-col min-w-0 min-h-0">
            {/* Editor Window */}
            <div className="flex-1 p-4 overflow-y-auto scrollbar-none bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] relative flex gap-4 min-w-0">
              <div className="absolute top-2 right-4 text-[9px] text-[var(--color-text-muted)] uppercase tracking-wider select-none font-sans">
                TypeScript Editor
              </div>
              
              <div className="text-right text-[var(--color-text-muted)] select-none text-[10px] sm:text-[11px] leading-relaxed border-r border-[var(--color-border)] pr-2 w-8 shrink-0 flex flex-col">
                {Array.from({ length: linesToRender.length || 1 }).map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>

              <pre className="flex-1 text-left m-0 p-0 text-[10px] sm:text-[11px] text-[var(--color-text-primary)] leading-relaxed select-text font-mono overflow-x-auto scrollbar-none min-w-0 whitespace-pre-wrap break-all sm:whitespace-pre sm:break-normal">
                <code>{renderedCode}</code>
              </pre>
            </div>

            {/* System Console */}
            <div className="h-36 sm:h-48 p-4 overflow-hidden bg-[var(--color-bg-secondary)] flex flex-col gap-1.5 text-xs select-none">
              <div className="text-[9px] text-[var(--color-text-muted)] uppercase tracking-wider mb-2 border-b border-[var(--color-border)] pb-1.5 flex items-center justify-between font-sans">
                <span className="flex items-center gap-1.5">
                  <TerminalIcon size={11} className="animate-pulse" /> Terminal Console
                </span>
                
                <button
                  onClick={handleSimulateCommand}
                  disabled={isSimulating || isTyping}
                  className="px-2.5 py-0.5 rounded border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-glow)] text-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)]/20 transition-all font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 text-[10px]"
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

              <div className="flex-1 flex flex-col gap-1 overflow-y-auto scrollbar-none pr-1">
                {terminalLogs.map((log, index) => {
                  if (typeof log !== "string" || !log) return null;
                  let logColor = "text-[var(--color-text-secondary)]";
                  if (log.startsWith("HỆ THỐNG:")) logColor = "text-purple-400";
                  else if (log.startsWith("CẢNH BÁO:")) logColor = "text-amber-400";
                  else if (log.startsWith("NGHIÊM TRỌNG:")) logColor = "text-red-400 font-semibold";
                  else if (log.startsWith("THÀNH CÔNG:")) logColor = "text-emerald-400 font-semibold";
                  else if (log.startsWith("NGƯỜI DÙNG:")) logColor = "text-blue-400";
                  else if (log.startsWith("TRẠNG THÁI:")) logColor = "text-cyan-400 border-t border-[var(--color-border)] pt-1 mt-1 font-semibold";
                  else if (log.startsWith("TÌM KIẾM:") || log.startsWith("KẾT QUẢ:") || log.startsWith("LỖI:")) logColor = "text-red-400";
                  else if (log.startsWith("THỰC THI:") || log.startsWith("CƠ SỞ DỮ LIỆU:") || log.startsWith("CLIENT:")) logColor = "text-amber-400";
                  else if (log.startsWith("BỘ PHÂN TÍCH:")) logColor = "text-blue-400";
                  else if (log.startsWith("ĐIỀU PHỐI:") || log.startsWith("M1_RESEARCH:") || log.startsWith("M2_VALIDATOR:")) logColor = "text-emerald-400";
                  
                  return (
                    <div key={index} className={`flex items-start gap-1.5 ${logColor} leading-relaxed text-[10px] sm:text-[11px] whitespace-pre-wrap break-all sm:whitespace-normal sm:break-normal`}>
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
