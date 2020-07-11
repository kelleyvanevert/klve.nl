import { useEffect } from "react";
import { Listener } from "history";
import { useHistory } from "react-router-dom";

export default function useNavEffect(f: Listener) {
  const history = useHistory();

  useEffect(() => {
    return history.listen(f);
  }, [f, history]);
}
