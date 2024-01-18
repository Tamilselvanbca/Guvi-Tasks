import React from "react";
import "./components/Card";
import Card from "./components/PricingCard";

function App() {
  let allow = ["", "fas fa-check"];
  let deny = ["text-muted", "fas fa-times"];
  let details = [
    {
      plan: "FREE",
      price: 0,
      user: "Single User",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: false,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: false,
      subdomain: "Free Subdomain",
      isSubdomain: false,
      statusReports: "Monthly Status Reports",
      isStatusReports: false,
    },

    {
      plan: "PLUS",
      price: 9,
      user: "5 User",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: true,
      subdomain: "Free Subdomain",
      isSubdomain: true,
      statusReports: "Monthly Status Reports",
      isStatusReports: false,
    },

    {
      plan: "PRO",
      price: 49,
      user: "Unlimited User",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: true,
      subdomain: "Free Subdomain",
      isSubdomain: true,
      statusReports: "Monthly Status Reports",
      isStatusReports: true,
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {details.map((e, i) => {
              return <Card data={e} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;