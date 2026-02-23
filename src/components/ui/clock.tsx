import { useEffect, useState } from "react";

const diaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const horarios = [
    { dia: "Segunda-feira", periodos: ["18:30–22:00"] },
    { dia: "Terça-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
    { dia: "Quarta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
    { dia: "Quinta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
    { dia: "Sexta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
    { dia: "Sábado", periodos: ["11:30–14:00", "19:00–22:00"] },
    { dia: "Domingo", periodos: ["11:30–14:00"] },
];

// Feriados (dd/mm)
const feriados = ["01/01", "25/12", "21/04"];

const diasMap: Record<string, string> = {
    Dom: "Domingo",
    Seg: "Segunda-feira",
    Ter: "Terça-feira",
    Qua: "Quarta-feira",
    Qui: "Quinta-feira",
    Sex: "Sexta-feira",
    Sáb: "Sábado",
};

function converterParaMinutos(hora: string) {
    const [h, m] = hora.split(":").map(Number);
    return h * 60 + m;
}

function verificarStatus() {
    const agora = new Date();

    const diaAtual = diaSemana[agora.getDay()];
    const diaHoje = diasMap[diaAtual];

    const minutosAtuais =
        agora.getHours() * 60 + agora.getMinutes();

    const dataHoje = agora.toLocaleDateString("pt-BR", {
        timeZone: "America/Sao_Paulo",
    });

    const [dia, mes] = dataHoje.split("/");

    // Verifica feriado
    if (feriados.includes(`${dia}/${mes}`)) {
        return { aberto: false, mensagem: "Fechado (Feriado)" };
    }

    const diaHorario = horarios.find(h => h.dia === diaHoje);
    if (!diaHorario) {
        return { aberto: false, mensagem: "Fechado" };
    }

    for (const periodo of diaHorario.periodos) {
        const [inicio, fim] = periodo.split("–");
        const inicioMin = converterParaMinutos(inicio);
        const fimMin = converterParaMinutos(fim);

        if (minutosAtuais >= inicioMin && minutosAtuais <= fimMin) {
            return { aberto: true, mensagem: "Aberto agora" };
        }

        if (minutosAtuais < inicioMin) {
            return { aberto: false, mensagem: `Abre às ${inicio}` };
        }
    }

    return { aberto: false, mensagem: "Fechado" };
}

const Clock = () => {
    const [horaAtual, setHoraAtual] = useState("");
    const [diaAtual, setDiaAtual] = useState("");
    const [status, setStatus] = useState<{ aberto: boolean; mensagem: string }>({
        aberto: false,
        mensagem: "",
    });

    useEffect(() => {
        const atualizar = () => {
            const agora = new Date();

            setHoraAtual(
                agora.toLocaleTimeString("pt-BR", {
                    timeZone: "America/Sao_Paulo",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                })
            );

            setDiaAtual(diaSemana[agora.getDay()]);
            setStatus(verificarStatus());
        };

        atualizar();
        const intervalo = setInterval(atualizar, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <h1>
            {diaAtual}, {horaAtual} —{" "}
            <span style={{ color: status.aberto ? "green" : "red" }}>
                {status.mensagem}
            </span>
        </h1>
    );
};

export default Clock;