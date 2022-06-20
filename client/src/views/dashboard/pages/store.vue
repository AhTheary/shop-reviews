<template>
  <section class="main-dashboard">
    <!--Main -->
    <div class="main-header">
      <div class="main-dashboard-name">
        <h2>Manage STORE</h2>
      </div>
      <div class="main-dashboard-add" @click="addStore">
        <a href="#" class="btn" type="button">Add New Store</a>
      </div>
    </div>
    <div class="table-store">
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Location</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
        <tr v-for="store in stores" :key="store._id">
          <td>{{ store._id }}</td>
          <td>{{ store.name }}</td>
          <td>{{ store.category }}</td>
          <td>{{ store.location }}</td>
          <td>
            <img
              :src="store.storeIMG"
              alt="erorUserpost"
              style="width: 60%;"
            />
          </td>
          <td>
            <span
              class="material-symbols-outlined"
              style="color: rgb(24, 127, 201);"
            >
              edit
            </span>

            <span
              class="material-symbols-outlined"
              style="color: rgb(241, 16, 16);"
            >
              delete
            </span>
          </td>
        </tr>
      </table>
    </div>
    <!-- open add store-->
    <div class="popup">
      <form action="#">
        <label for="img">Store image:</label>
        <br />
        <input type="file" id="img" name="img" accept="image/*" />
        <br />
        <br />
        <input type="text" id="name" name="name" placeholder="Name store" />
        <br />
        <br />
        <select name="categories" id="categories">
          <option value="Select a category">Select a category</option>
          <option value="clothes">Clothes</option>
          <option value="restaurant">Restaurant</option>
          <option value="supermartket">Supermartket</option>
          <option value="sport">Sport</option>
        </select>
        <br />
        <br />
        <input
          type="location"
          id="location"
          name="location"
          placeholder="Add Location"
        />

        <br />
        <br />
        <textarea
          name="description"
          id="description"
          placeholder="Description"
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Confirm" @click="confirmStore" />
        <input type="submit" value="Cancel" @click="cancel" />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stores: [
        {
          _id: 1,
          name: 'KFC',
          category: 'Sport',
          location: 'BKK,PP',
          storeIMG:
            'https://www.khmertimeskh.com/wp-content/uploads/2022/03/Cambodias-first-HM-wows-the-crowds-on-opening-day.jpg',
        },
         {
          _id: 2,
          name: 'Buger King',
          category: 'Sport',
          location: 'TK,PP',
          storeIMG:
            'https://th.bing.com/th/id/OIP.i3X-dRani-pe3-_MXZbaqwHaFP?pid=ImgDet&rs=1',
        },
      ],
    }
  },
  methods: {
    addStore() {
      const openpopup = document.querySelector('.popup')
      openpopup.classList.add('popup-open')
    },
    cancel() {
      const closePopup = document.querySelector('.popup')
      closePopup.classList.remove('popup-open')
    },
  },
}
</script>

<style scoped>
.popup {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.561);
  top: 0px;
  left: 0px;
  visibility: hidden;
}
.popup.popup-open {
  visibility: visible;
}

form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  border: 1px solid rgb(196, 196, 196);
  padding: 12px;
  background-color: white;
  /* text-align: center; */
}
</style>
