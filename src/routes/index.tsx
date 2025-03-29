import { createFileRoute } from "@tanstack/react-router";
import Manutencao from "@/pages/manutencao";

export default Manutencao;
export const Route = createFileRoute("/")({
  component: Manutencao,
});
