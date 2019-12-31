import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Link from "next/link";

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`;

export default function Signout() {
  const [useSignout] = useMutation(SIGNOUT_MUTATION, {
    onCompleted: () => {
      sessionStorage.clear();
      history.go(0);
    }
  });

  return (
    <Link href="/">
      <a
        onClick={() => {
          useSignout();
        }}
      >
        Signout
      </a>
    </Link>
  );
}
