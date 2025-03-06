import React, { useEffect } from 'react';
import styles from '../style';
import Uninav from './Uninav';
import Footer from './Footer';

function SignInForm() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const form = document.getElementById("login_form");
    const resultDiv = document.getElementById("result_login");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(form);

      resultDiv.innerHTML = "Please Wait...";

      fetch("login-process.php", {
        method: "POST",
        body: formData,
      })
        .then(response => response.text())
        .then(data => {
          resultDiv.innerHTML = data;

          // Check if the response indicates success (adjust this based on your actual response content)
          if (data.includes("success")) {
            // Redirect to the admin panel
            window.location.href = "/admin/"; // Replace with the actual admin panel URL
          }
        })
        .catch(error => {
          resultDiv.innerHTML = "An error occurred.";
        });
    });
  }, []);
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Uninav />
        <section className="bg-primary font-poppins">
          <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center font-poppins mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Welcome to Byte4ge
            </a>
            <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-primary dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <p>
                  <span className='text-orange-500 text-[12px] border-[1px] border-orange-500 rounded-full border-py-[4px] px-[6px]'>Only for Admin</span>
                </p>
                <div id="result_login" className='text-orange-500 mt-[10px] '>
                </div>
                <form className="space-y-4 md:space-y-6" id="login_form" action="#" method="POST">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-primary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"

                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                      </div>
                    </div>
                    <a href="admin/admin_password" className="text-sm font-medium text-dimWhite hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-500 hover:bg-orange-500 hover:text-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 tex-center">
                    This account is provided and supervised by Byte4ge.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default SignInForm;
