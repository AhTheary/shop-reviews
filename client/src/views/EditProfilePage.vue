<template>
  <div>
    <center>
      <div class="box">
        <div class="home_container">
          <div class="sidebar">
            <center>
              <img src="https://th.bing.com/th/id/OIP.MSoKVHusQR3RGGNIeK-qnQHaHa?pid=ImgDet&rs=1" />
              <h2>Sonic</h2>
              <h5>sonic@gmail.com</h5>
            </center>
          </div>
          <div class="container">
            <div class="container-text">
              <center>
                <table id="component">
                  <tr>
                    <td colspan="2">
                      <h1>Edit Profile</h1>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>First Name</div>
                      <input
                        name="firstname"
                        type="text"
                        placeholder="Enter new first name"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <div>Last Name</div>
                      <input
                        name="lastname"
                        type="text"
                        placeholder="Enter new last name"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div>Email</div>
                      <input
                        name="email"
                        type="text"
                        placeholder="Enter new email"
                        class="email"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div>Phone Number</div>
                      <input
                        name="phone"
                        type="text"
                        placeholder="Enter new phone number"
                        class="phone_number"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>New Password</div>
                      <input
                        name="password"
                        type="text"
                        placeholder="Enter new password"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <div>Confirm Password</div>
                      <input
                        name="confirm password"
                        type="text"
                        placeholder="Enter new password"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </table>
                <div>
                  <router-link to="/"> <button type="cancel" value="Cancel" class="cancel">
                    Cancel
                  </button></router-link>
                  <button type="submit" value="Submit" class="save">
                    Save
                  </button>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.box {
    width: 1120px;
    height: 500px;
    border: 1px solid #eee;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
}
.home_container {
    position: relative;
    height: 100%;
}
.sidebar {
    width: 30%;
    height: 0px;
    background-color: rgb(206, 27, 27);
    position: fixed;
    padding-top: 0px;
}
.sidebar img {
    width: 200px;
    border-radius: 100%;
    border: 2px solid #e5e5e5;
    margin-top: 60px;
}
.sidebar h2{
    font-size: 30px;
}
.container {
    height: 100vh;
    margin-left: 22%;
    margin-top: 0px;
    color: rgb(8, 8, 8);
    position: relative; 
}
.container_mask {
    height: 100vh;
}
.container .container-text {
    width: 100%;
    position: absolute;
    right: 0;
    margin-top: 40px;
}
.form-control {
    width: 300px; 
    height: 30px;
    margin-bottom: 20px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: #d3d2d2;
    padding-left: 20px;
} 
.email {
    width: 620px; 
    height: 30px; 
    margin-bottom: 20px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: #d3d2d2;
    padding-left: 20px;
} 
.phone_number {
    width: 620px; 
    height: 30px; 
    margin-bottom: 20px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: #d3d2d2;
    padding-left: 20px;
}
.save { 
    padding: 8px 8px; 
    border: 1px solid white;
    border-radius: 20px;
    background-color: blue; 
    color: white;
}
.cancel { 
    padding: 8px 4px; 
    border: 1px solid white;
    border-radius: 20px;
    background-color: rgb(117, 115, 115); 
    color: white;
    margin-left: 500px;
}
</style>
