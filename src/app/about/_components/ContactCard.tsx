"use client";

import { useState } from "react";
import Copy from "@/lib/icons/copy.svg";
import Check from "@/lib/icons/check.svg";
import Github from "@/lib/icons/github.svg";
import Linkedin from "@/lib/icons/linkedin.svg";
import FileText from "@/lib/icons/file-text.svg";

const EMAIL = "gayoung.ha05@gmail.com";

export default function ContactCard() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex w-[480px] shrink-0 flex-col gap-[22px] self-start rounded-[30px] bg-bg-deep p-9 max-[900px]:w-full max-[750px]:p-6">
      <span className="text-xs tracking-[1.6px] text-ink-warm">
        GET IN TOUCH
      </span>
      <p className="text-2xl leading-[1.2] font-bold tracking-[-0.8px] whitespace-pre-line text-surface-warm">
        {"제게 다음 옷을\n입혀보실래요?"}
      </p>
      <button
        type="button"
        onClick={copyEmail}
        className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-[22px] bg-ov-2 px-[18px] py-4 transition-colors hover:bg-ov-3"
      >
        <span className="min-w-0 truncate text-md text-surface-warm">
          {EMAIL}
        </span>
        {copied ? (
          <Check width={15} height={15} className="shrink-0 text-mint" />
        ) : (
          <Copy width={15} height={15} className="shrink-0 text-ink-warm" />
        )}
      </button>
      <div className="flex gap-[9px] max-[750px]:flex-col">
        <a
          href="https://github.com/qlalf9824"
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-[18px] bg-brand-clay px-3.5 py-[13px] text-bg-deep-warm transition-transform hover:scale-[1.03]"
        >
          <Github width={14} height={14} />
          <span className="text-sm">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/gayoung-ha05"
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-[18px] bg-ov-2 px-3.5 py-[13px] text-surface-warm transition-colors hover:bg-ov-3"
        >
          <Linkedin width={14} height={14} />
          <span className="text-sm">LinkedIn</span>
        </a>
        <a
          href="/하가영_이력서.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-[18px] bg-ov-2 px-3.5 py-[13px] text-surface-warm transition-colors hover:bg-ov-3"
        >
          <FileText width={14} height={14} />
          <span className="text-sm">Resume</span>
        </a>
      </div>
      <span className="text-sm text-ink-warm">보통 하루 안에 답장합니다.</span>
    </div>
  );
}
