// ── Fade animation classes ──
export const FADE_UP = "opacity-0 translate-y-8 transition-all duration-700 ease-out";
export const FADE_IN = "opacity-100 translate-y-0";

// ── Horários de funcionamento ──
export const horarios = [
  { dia: "Segunda-feira", periodos: ["18:30–22:00"] },
  { dia: "Terça-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Quarta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Quinta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Sexta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Sábado", periodos: ["11:30–14:00", "19:00–22:00"] },
  { dia: "Domingo", periodos: ["11:30–14:00"] },
] as const;

// ── Feriados ──
export const feriados = ["01/01", "21/04", "25/12"];

// ── Mapeamento de dias ──
export const diaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"] as const;
export const diasMap: Record<string, string> = {
  Dom: "Domingo",
  Seg: "Segunda-feira",
  Ter: "Terça-feira",
  Qua: "Quarta-feira",
  Qui: "Quinta-feira",
  Sex: "Sexta-feira",
  Sáb: "Sábado",
};

// ── WhatsApp ──
export const WHATSAPP_URL = "https://wa.me/5554996743601";

// ── Verificar status aberto/fechado ──
function toMin(hora: string) {
  const [h, m] = hora.split(":").map(Number);
  return h * 60 + m;
}

export function verificarStatus() {
  const agora = new Date();
  const minutosAtuais = agora.getHours() * 60 + agora.getMinutes();
  const diaAtual = diasMap[diaSemana[agora.getDay()]];
  const data = agora.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const [dia, mes] = data.split("/");

  if (feriados.includes(`${dia}/${mes}`)) return { texto: "Fechado (Feriado)", aberto: false };

  const diaHorario = horarios.find(h => h.dia === diaAtual);
  if (!diaHorario) return { texto: "Fechado", aberto: false };

  for (const periodo of diaHorario.periodos) {
    const [inicio, fim] = periodo.split("–");
    const ini = toMin(inicio);
    const fimMin = toMin(fim);
    if (minutosAtuais >= ini && minutosAtuais <= fimMin) return { texto: "Aberto agora", aberto: true };
    if (minutosAtuais < ini) return { texto: `Abre às ${inicio}`, aberto: false };
  }
  return { texto: "Fechado", aberto: false };
}
