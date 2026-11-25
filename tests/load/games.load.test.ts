// Importamos el módulo HTTP para realizar solicitudes a nuestra API.
import http from "k6/http";

// Importamos las funciones de validación y espera.
import { check, sleep } from "k6";

// Definimos la estructura esperada de la respuesta del catálogo.
interface GameCatalogResponse {
  success: boolean;
  total: number;
  data: unknown[];
}

// Configuración de nuestra prueba de rendimiento.
export const options = {
  // Simulamos 5 usuarios virtuales simultáneos.
  vus: 5,

  // Duración de la prueba.
  duration: "20s",

  // Definimos los criterios de aceptación.
  thresholds: {
    // El percentil 95 debe ser inferior a 500 ms.
    http_req_duration: ["p(95)<500"],

    // La tasa de solicitudes HTTP fallidas debe ser menor al 1%.
    http_req_failed: ["rate<0.01"],

    // Todas las validaciones deben ser exitosas.
    checks: ["rate==1"],
  },
};

// Escenario ejecutado por cada usuario virtual.
export default function (): void {
  // Realizamos una solicitud GET al catálogo de videojuegos.
  const response = http.get("http://127.0.0.1:3000/games");

  // Validamos la respuesta de nuestra API.
  check(response, {
    // Verificamos que el código HTTP sea 200.
    "Status code is 200": (r) => r.status === 200,

    // Verificamos que el catálogo contenga los datos esperados.
    "Game catalog is valid": (r) => {
      try {
        const body = r.json() as unknown as GameCatalogResponse;

        return (
          body.success === true &&
          body.total === 5 &&
          Array.isArray(body.data) &&
          body.data.length === 5
        );
      } catch {
        return false;
      }
    },
  });

  // Simulamos el tiempo de espera de un usuario entre solicitudes.
  sleep(1);
}