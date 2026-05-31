"use client";

import React, { useState, memo } from "react";
import Link from "next/link";
import { Terminal as TerminalIcon, ArrowRight } from "lucide-react";
import { SandboxDynamicBackground } from "./SandboxDynamicBackground";
const MemoizedSandboxDynamicBackground = memo(SandboxDynamicBackground);
import { SandboxIDE } from "./SandboxIDE";

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
    label: "Khởi tạo Sandbox",
    tagline: "Trình Biên Dịch Trống",
    narrative: "Hệ thống mô phỏng đang chờ lệnh. Tại giai đoạn này, AI chưa được nạp bất kỳ quy tắc hay kỹ năng cấu trúc nào, sẵn sàng nhận các chỉ thị lập trình cơ bản nhất từ người dùng.",
    cta: "Bắt đầu gõ mã",
  },
  {
    id: 1,
    status: "UNSTRUCTURED",
    statusColor: "text-amber-400 border-amber-500/20 bg-amber-950/20",
    label: "Mã Nguồn Cẩu Thả",
    tagline: "Xung Đột Kiểu Dữ Liệu any",
    narrative: "AI cố gắng giải quyết yêu cầu viết code khi chưa có Kỹ năng tối ưu. Nó đoán mò logic, lạm dụng kiểu 'any', thiếu try-catch xử lý lỗi kết nối và dễ gây lỗi runtime nghiêm trọng.",
    cta: "Nạp Strict Mode",
  },
  {
    id: 2,
    status: "INJECTING PROTOCOL",
    statusColor: "text-blue-400 border-blue-500/20 bg-blue-950/20",
    label: "Truyền Kỹ Năng Hệ Thống",
    tagline: "Nạp Cờ Kiểm Soát Compiler",
    narrative: "Hệ thống tiến hành truyền tệp cấu hình kỹ năng nghiêm ngặt. Compiler bắt đầu tải cấu trúc dữ liệu AI-Readable, nạp các cờ strictNullChecks, noImplicitAny để chuẩn hóa tư duy an toàn cho AI.",
    cta: "Kiểm tra an toàn",
  },
  {
    id: 3,
    status: "CERTIFIED EXPERT",
    statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-950/20",
    label: "Mã Nguồn Đạt Chuẩn",
    tagline: "Type-Safe Tuyệt Đối 100%",
    narrative: "Được trang bị Kỹ năng tối tân từ Skillbook, AI viết mã nguồn an toàn tuyệt đối ở compile-time với static types đầy đủ, tích hợp Zod validation và loại bỏ hoàn toàn rủi ro runtime crash.",
    cta: "Khám phá thư viện",
  },
];

export function SandboxSection(): React.ReactElement {
  const [stage, setStage] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleNext = (): void => {
    if (stage < 3 && !isTyping) {
      setStage((prev) => prev + 1);
    }
  };

  const handleReset = (): void => {
    if (!isTyping) {
      setStage(0);
    }
  };

  return (
    <section id="section-sandbox" className="hidden sm:block relative py-10 px-4 sm:py-20 sm:px-12 bg-[var(--color-bg-primary)] overflow-hidden">
      <MemoizedSandboxDynamicBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-transparent to-[var(--color-bg-primary)] opacity-50 pointer-events-none z-0" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-12">
          <p className="section-title mb-2 flex items-center justify-center gap-2">
            <TerminalIcon size={14} className="text-[var(--color-accent-primary)]" />
            Trình Giả Lập Sandbox
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-text-primary)]">
            Trải Nghiệm Trình Giả Lập Agent
          </h2>
          <p className="hidden sm:block text-xs sm:text-base text-[var(--color-text-secondary)] mt-2 font-sans max-w-xl mx-auto">
            Tương tác trực tiếp với bộ mô phỏng Agent để xem cách các kỹ năng tối tân thay đổi hành vi và mã nguồn của AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Controller */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="hidden sm:flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 w-full">
              {STAGES.map((s) => (
                <button
                  key={s.id}
                  disabled={isTyping}
                  onClick={() => {
                    if (!isTyping) {
                      setStage(s.id);
                    }
                  }}
                  className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded-full border transition-all duration-300 font-mono cursor-pointer ${
                    stage === s.id
                      ? "border-[var(--color-accent-primary)] bg-[var(--color-accent-glow)] text-[var(--color-accent-primary)] font-semibold"
                      : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)]"
                  } ${isTyping ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  0{s.id + 1}. {s.status}
                </button>
              ))}
            </div>

            <div className="w-full">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-6 ${STAGES[stage].statusColor}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                {STAGES[stage].status}
              </div>

              <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-[var(--color-accent-primary)] uppercase mb-2">
                Giai Đoạn 0{stage + 1} &bull; {STAGES[stage].label}
              </h3>
              <h4 className="text-xl sm:text-3xl font-extrabold text-[var(--color-text-primary)] leading-tight mb-4 font-sans">
                {STAGES[stage].tagline}
              </h4>

              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6 sm:mb-8 max-w-md font-sans">
                {STAGES[stage].narrative}
              </p>
            </div>

            <div className="flex flex-row items-center gap-1.5 w-full">
              {stage < 3 ? (
                <button
                  onClick={handleNext}
                  disabled={isTyping}
                  className="btn-primary flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-2 sm:px-5 py-2 sm:py-2.5 text-[10px] xs:text-[11px] sm:text-sm font-sans cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {STAGES[stage].cta}
                  <ArrowRight size={12} className="shrink-0" />
                </button>
              ) : (
                <Link href="/skills" className="btn-primary flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-2 sm:px-5 py-2 sm:py-2.5 text-[10px] xs:text-[11px] sm:text-sm animate-pulse-glow font-sans decoration-none whitespace-nowrap">
                  {STAGES[stage].cta}
                  <ArrowRight size={12} className="shrink-0" />
                </Link>
              )}

              {stage > 0 && (
                <button
                  onClick={handleReset}
                  disabled={isTyping}
                  className="btn-secondary flex-1 sm:flex-initial flex items-center justify-center px-2 sm:px-5 py-2 sm:py-2.5 text-[10px] xs:text-[11px] sm:text-sm font-sans cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  Thiết lập lại
                </button>
              )}
            </div>
          </div>

          {/* Right Column: SandboxIDE */}
          <SandboxIDE stage={stage} onTypingChange={setIsTyping} />
        </div>
      </div>
    </section>
  );
}
