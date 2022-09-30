import { useRouter } from "next/router";
import { useOnce } from "lib/useOnce";

export default function NotFound() {
  const router = useRouter();

  useOnce(() => {
    router.push("/");
  });

  return null;
}
