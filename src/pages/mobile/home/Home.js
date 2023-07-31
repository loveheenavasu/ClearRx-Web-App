import Mobileheader from "components/mobile-components/mobile-header/Mobileheader";
import React from "react";
import Container from "react-bootstrap/Container";

import DoctorInfoCard from "components/doctor-profile-route/DoctorInfoCard";
import RxTabs from "components/rxtabs/RxTabs";
import NewRxIcon from "assets/svg/NewRxIcon";
import SearchRxIcon from "assets/svg/SearchRxIcon";

export default function Home() {
  return (
    <>
      <Container>
        <div className="mt-20">
          <Mobileheader />
          <div className="mt-30">
            <DoctorInfoCard />
          </div>
        </div>
        <div className="mx-34">
          <RxTabs RxTitle=" New Rx" RxIcon={<NewRxIcon />} />
        </div>
        <div className="mx-34">
          <RxTabs RxTitle=" Search Rx" RxIcon={<SearchRxIcon />} />
        </div>
      </Container>
    </>
  );
}
