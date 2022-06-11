<template>
  <div>
    <center>
      <div class="box">
        <h2>Feedback Form</h2>
        <div>Name:</div>
        <input name="Name" type="text" placeholder="Enter Name" class="input" />
        <div>Email:</div>
        <input
          name="Email"
          type="text"
          placeholder="Enter Email"
          class="input"
        />
        <div>Subject:</div>
        <input
          name="Subject"
          type="text"
          placeholder="Enter Subject"
          class="input"
        />
        <div>Description:</div>
        <textarea
          name="description"
          placeholder="Enter Message"
          class="description"
        ></textarea>
        <div>
          <button type="submit" value="Submit" class="submit">Submit</button>
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
    width: 570px;
    height: 600px;
    border: 1px solid black;
    margin: 20px 0;
    border-radius: 10px;
}
.box h2 {
    padding-top: 40px;
    padding-bottom: 10px;
}
.input {
    width: 300px;
    height: 30px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgb(211, 209, 209);
    padding: 24px 24px;
}
.input::placeholder {
  /* color: rgba(87, 87, 86, 0.8); */
  color: #808080;
  /* text-transform:lowercase; */
  letter-spacing: 1.5px;
  font-size: 14px;
}

.box div {
    text-align: left;
    padding-left: 135px;
    padding-top: 10px;
}
.description {
    width: 300px;
    height: 150px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgb(211, 209, 209);
    padding: 24px 24px;
}
.description::placeholder {
  /* color: rgba(87, 87, 86, 0.8); */
  color: #808080;
  /* text-transform:lowercase; */
  letter-spacing: 1.5px;
  font-size: 14px;
}
.submit {
    /* margin-left: 120px; */
    padding: 5px 25px;
    color: white;
    border: 1px solid white;
    border-radius: 30px;
    background-color: rgb(89, 54, 243);
}
</style>
