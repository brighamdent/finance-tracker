import React, { useEffect } from "react";

export default function useScrollToBottom(htmlElement: string, items: []) {
  useEffect(() => {
    const el = document.getElementById(htmlElement);

    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [items]);
}
