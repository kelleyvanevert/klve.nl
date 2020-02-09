import { useEffect } from "react";
import History from "history";
import { useHistory } from "react-router";

export default function useNavEffect(f: History.LocationListener) {
  const history = useHistory();

  useEffect(() => {
    return history.listen(f);
  }, [f, history]);
}
