export function formatMoney(value) {
    if (value) {
        return new Intl.NumberFormat("pt", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    } else {
        return "Saldo indisponível";
    }
}

export function formatDate(dateUTC) {
    if (dateUTC) {
        return new Intl.DateTimeFormat("pt", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(new Date(dateUTC));
    } else {
        return "Data não informada";
    }
}