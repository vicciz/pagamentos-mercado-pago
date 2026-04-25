import { loadMercadoPago } from "@mercadopago/sdk-js";

await loadMercadoPago();
const mp = new window.MercadoPago("APP_USR-efbc1a9a-dceb-4ab0-abdf-0d0a1ce9a4ab");