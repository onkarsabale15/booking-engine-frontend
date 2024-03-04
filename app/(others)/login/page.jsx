"use client"
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import LoginWithSocial from "@/components/common/LoginWithSocial";
import LoginForm from "@/components/common/LoginForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isLoggedIn } from "../../../utils/auth";

const LogIn = () => {
  const router = useRouter();
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    async function checkLoggedIn() {
      const isUserLoggedIn = await isLoggedIn();
      setLogged(isUserLoggedIn);
      if (isUserLoggedIn) {
        router.push("/");
      }
    }

    checkLoggedIn();
  }, []);

  if (!logged) {
    return (
      <>
        <div className="header-margin"></div>
        <DefaultHeader />
        <section className="layout-pt-lg layout-pb-lg bg-blue-2">
          <div className="container">
            <div className="row justify-center">
              <div className="col-xl-6 col-lg-7 col-md-9">
                <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                  <LoginForm />
                  <div className="row y-gap-20 pt-30">
                    <div className="col-12">
                      <div className="text-center">or sign in with</div>
                    </div>
                    <LoginWithSocial />
                    <div className="col-12">
                      <div className="text-center px-30">
                        By creating an account, you agree to our Terms of Service
                        and Privacy Statement.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CallToActions />
        <DefaultFooter />
      </>
    );
  } else {
    // If the user is already logged in, redirect them to the home page
    return null;
  }
};

export default LogIn;
