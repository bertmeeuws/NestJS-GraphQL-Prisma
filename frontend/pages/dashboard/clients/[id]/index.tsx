import React, { ContextType, Suspense, useContext } from "react";
import Head from "next/head";
import Sidebar from "../../../../components/Sidebar";
import HOCSection from "../../../../ui/HOCSection";
import Header from "../../../../components/Header/Header";
import { IBreadcrumb } from "../../../../types/breadcrumbs";
import { GET_CLIENT_BY_ID_AS_COACH } from "../../../../types/clients";
import { useQuery } from "urql";
import Spinner from "../../../../ui/Spinner";
import Breadcrumbs from "../../../../ui/Breadcrumbs";
import { useRouter } from "next/router";
import { ENUM_ERRORS } from "../../../../types/enum";
import UserProfileImage from "../../../../components/UserProfileImage";

export default function Index({ query }: any) {
  const router = useRouter();

  const [breadcrumbs, setBreadcrumbs] = React.useState<IBreadcrumb[]>([]);

  const [{ data, fetching }, fetchSelectedUser] = useQuery({
    query: GET_CLIENT_BY_ID_AS_COACH,
    variables: {
      clientId: Number(query.id),
    },
  });

  React.useEffect(() => {
    generateBreadCrumbs();
  }, []);

  const generateBreadCrumbs = () => {
    setBreadcrumbs([
      {
        name: "Clients",
        href: "/dashboard/clients",
      },
      {
        name: "Profile",
        //@TODO make dynamic
        href: "/dashboard/clients/123",
      },
    ]);
  };

  if (!fetching && !data.client) {
    router.push("/dashboard/clients?state=" + ENUM_ERRORS.CLIENT_NOT_FOUND);
  }

  const renderUserDetails = () => {
    const {
      address,
      city,
      dob,
      name,
      number,
      phone,
      postal,
      surname,
      user,
      id,
    } = data?.client;

    return (
      <>
        <Suspense fallback={<Spinner />}>
          <div className="mt-8 flex items-center space-x-2 font-semibold">
            <UserProfileImage
              profile_image={user?.profile_image}
              width={12}
              height={12}
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {name} {surname}
              </p>
              <p className="text-xs font-semibold text-gray-400">
                Joined in <span className="font-bold">October</span>
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-lg bg-white p-6">
            <h2
              id="payment-details-heading"
              className="text-xl font-bold leading-6 text-gray-800"
            >
              Client information
            </h2>
            <p className="mt-1 border-b-2 pb-4 text-gray-400">
              All the information we have about this client.
            </p>
            <div className="grid grid-cols-4 space-x-8 py-4">
              <div className="col-span-2  grid grid-cols-2">
                <div>
                  <div className="col-span-2 flex flex-col justify-start font-semibold">
                    <span className="text-gray-500">Name</span>
                    <p className="text-gray-800">{name}</p>
                  </div>
                </div>
                <div>
                  <div className="col-span-2 flex flex-col justify-start font-semibold">
                    <span className="text-gray-500">Surname</span>
                    <p className="text-gray-800">{surname}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2  grid grid-cols-2">
                <div>
                  <div className="col-span-2 flex flex-col justify-start font-semibold">
                    <span className="text-gray-500">Name</span>
                    <p className="text-gray-800">{name}</p>
                  </div>
                </div>
                <div>
                  <div className="col-span-2 flex flex-col justify-start font-semibold">
                    <span className="text-gray-500">Surname</span>
                    <p className="text-gray-800">{surname}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 space-x-8 py-4">
              <div className="col-span-2  grid grid-cols-2">
                <div>
                  <div className="col-span-2 flex flex-col justify-start font-semibold">
                    <span className="text-gray-500">Name</span>
                    <p className="text-gray-800">{name}</p>
                  </div>
                </div>
                <div>
                  <div className="col-span-2 flex flex-col justify-start font-semibold">
                    <span className="text-gray-500">Surname</span>
                    <p className="text-gray-800">{surname}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2  grid grid-cols-2">
                <div>
                  <div className="col-span-2 flex flex-col justify-start font-semibold">
                    <span className="text-gray-500">Name</span>
                    <p className="text-gray-800">{name}</p>
                  </div>
                </div>
                <div>
                  <div className="col-span-2 flex flex-col justify-start font-semibold">
                    <span className="text-gray-500">Surname</span>
                    <p className="text-gray-800">{surname}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            <div
              onClick={(e) =>
                router.push("/dashboard/clients/" + query.id + "/workout")
              }
              className="group col-span-1 mt-8 flex h-56 cursor-pointer flex-col justify-between rounded-lg bg-white p-6 transition-all duration-100 hover:bg-fluoGreen"
            >
              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-white">
                Workout
              </h2>
              <p className="text-lg font-semibold text-gray-600 group-hover:text-white">
                Push pull legs
              </p>
            </div>
            <div
              onClick={(e) =>
                router.push("/dashboard/clients/" + query.id + "/food")
              }
              className="group col-span-1 mt-8 flex cursor-pointer flex-col justify-between rounded-lg bg-white p-6 transition-all duration-100 hover:bg-fluoGreen"
            >
              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-white">
                Diet
              </h2>
              <div>
                <p className="text-lg font-bold text-gray-600 group-hover:text-white">
                  3000 calories
                </p>
                <div className="flex space-x-4 font-semibold text-gray-600 group-hover:text-white">
                  <p>200g Protein</p>
                  <p>300g Carbs</p>
                  <p>70g Fats</p>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </>
    );
  };

  return (
    <section className="flex min-h-screen flex-col">
      <Head>
        <title>Client overview | CoachAcademy</title>
      </Head>
      <Sidebar>
        <HOCSection>
          <div className="flex flex-grow flex-col">
            <Header page="Client overview" />
            <div className="flex flex-grow flex-col px-6">
              <Breadcrumbs data={breadcrumbs} />
              {fetching && (
                <div className="flex h-full flex-grow items-center justify-center">
                  <Spinner />
                </div>
              )}
              {data?.client && renderUserDetails()}
            </div>
          </div>
        </HOCSection>
      </Sidebar>
    </section>
  );
}

Index.getInitialProps = ({ query }: any) => {
  return {
    query,
  };
};
