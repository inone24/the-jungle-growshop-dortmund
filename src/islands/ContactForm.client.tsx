import * as React from "react";
import { useForm } from "react-hook-form";

export default function ContactFormIsland({ action }: { action: string }) {
  const { register, handleSubmit, formState:{ errors, isSubmitting } } = useForm();
  const onSubmit = () => { (document.getElementById('ssr-contact') as HTMLFormElement)?.submit(); };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label className="block text-sm text-white/70 mb-1">Name</label>
        <input className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white"
               {...register("name",{ required:"Bitte Namen angeben" })}/>
        {errors.name && <p className="text-xs text-red-400 mt-1">{String(errors.name.message)}</p>}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/70 mb-1">E-Mail</label>
          <input type="email" {...register("email",{ required:"E-Mail fehlt" })}
                 className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white"/>
          {errors.email && <p className="text-xs text-red-400 mt-1">{String(errors.email.message)}</p>}
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Telefon (optional)</label>
          <input type="tel" {...register("phone")}
                 className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white"/>
        </div>
      </div>
      <div>
        <label className="block text-sm text-white/70 mb-1">Nachricht</label>
        <textarea rows={5} {...register("message",{ required:"Nachricht fehlt" })}
                  className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white"></textarea>
        {errors.message && <p className="text-xs text-red-400 mt-1">{String(errors.message.message)}</p>}
      </div>
      <button className="rounded-lg bg-white px-4 py-2 text-black font-semibold disabled:opacity-60" disabled={isSubmitting}>
        Nachricht senden
      </button>
    </form>
  );
}
