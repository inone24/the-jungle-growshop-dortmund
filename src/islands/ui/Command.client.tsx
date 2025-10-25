import * as React from "react";
import { Command as Cmd } from "cmdk";
import { Search } from "lucide-react";

export function CommandDialog({ items = [] }: { items: { label: string; href?: string }[] }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="rounded-md border px-3 py-2 text-white/90">
        Suche
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 ui-backdrop flex items-start justify-center p-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="ui-popover max-w-xl w-full p-0 rounded-lg overflow-hidden">
            <div className="flex items-center border-b px-3 h-12">
              <Search className="mr-2 h-4 w-4 opacity-60" />
              <input autoFocus placeholder="Suchen…" className="flex-1 bg-transparent outline-none" />
            </div>
            <Cmd className="max-h-[300px] overflow-y-auto p-2">
              {items.map((it, i) => (
                <a
                  key={i}
                  href={it.href || "#"}
                  className="block px-2 py-2 rounded hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {it.label}
                </a>
              ))}
            </Cmd>
            <div className="p-2 text-right">
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white">
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
