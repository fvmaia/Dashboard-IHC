import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="Registrar Usuario"
        description=""      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
