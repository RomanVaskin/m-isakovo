"use client"

import { useState, type FormEvent } from "react"
import { X, Check } from "lucide-react"
import { site } from "@/lib/site-data"

export function BookingDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "" })

  if (!open) return null

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleClose() {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: "", phone: "", email: "" })
    }, 250)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Записаться на просмотр"
    >
      <button
        type="button"
        aria-label="Закрыть"
        onClick={handleClose}
        className="absolute inset-0 bg-graphite/50 backdrop-blur-sm animate-in fade-in"
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-lg border border-border bg-background shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Закрыть окно"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center px-8 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-display text-2xl tracking-tight text-foreground">Заявка отправлена</h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              Спасибо! Наш менеджер свяжется с вами и согласует удобное время визита в Малое Исаково.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-8 text-sm font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <div className="px-8 py-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Малое Исаково</p>
            <h3 className="mt-3 text-balance font-display text-2xl tracking-tight text-foreground">
              Записаться на просмотр
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Оставьте контакты — покажем резиденции и территорию посёлка.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
              <Field
                id="name"
                label="Имя"
                type="text"
                placeholder="Как к вам обращаться"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                required
              />
              <Field
                id="phone"
                label="Телефон"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={form.phone}
                onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                required
              />
              <Field
                id="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              />

              <button
                type="submit"
                className="mt-2 h-12 rounded-md bg-accent text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Отправить заявку
              </button>
              <p className="text-center text-xs leading-relaxed text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

function Field({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  id: string
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-md border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </label>
  )
}
