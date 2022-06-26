import React from 'react'

const Profile = () => {
  return (
    <div className='container-fluid p-4'>
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="container-fluid p-3 shadow">
            <div className="row align-items-center justify-content-center g-3">
              <div className="col-12 py-3 bg-white d-flex justify-content-center align-items-center flex-column">
                <div className="circle bg-primary">
                  <h2 className='m-0 display-2 fw-bold text-white '>H</h2>
                </div>
                <h3 className='m-0 mt-3 fw-bold'>Hanniel Daniel</h3>
              </div>

              <div className="col-12 p-0 d-flex align-items-start justify-content-center">
                <div class="nav flex-column w-100 nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <button class="nav-link active w-100" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                  <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                  <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                  <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-8">
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">...</div>
            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">...</div>
            <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile