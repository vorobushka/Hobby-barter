import './editProfile.css';
import React, { Component } from 'react';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      email: null,
      login: null,
      links: null,
      phone: null,
      profession: null,
    };
  }
  render() {
    return (
      <div class="container emp-profile">
        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                <div class="file btn btn-lg btn-primary">
                  Change Photo
                                <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="profile-work">
                <p>WORK LINK</p>
                <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit work link" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="profile-work">
                <p>I WANT TO LEARN</p>
                <input  class="profile-edit-btn" name="btnAddMore" value="Edit wishes" />
              </div>
            </div>
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name</label>
                      <input class="profile-edit-btn" name="btnAddMore" value="                     Edit Name" />
                    </div>
                    <div class="col-md-6">
                      <p></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                      <input class="profile-edit-btn" name="btnAddMore" value="                      Edit email" />
                    </div>
                    <div class="col-md-6">
                      <p></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone</label>
                      <input class="profile-edit-btn" name="btnAddMore" value="                    Edit phone" />
                    </div>
                    <div class="col-md-6">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Profession</label>
                       <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit professional" />
                    </div>
                    <div class="col-md-6">
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    )
  }
}