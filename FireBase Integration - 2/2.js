const firebaseConfig = {
    apiKey: "AIzaSyC0lT3f6rzKl-P_src6sJQv1o4_I_jicVY",
    authDomain: "library-managmentsystem-bb919.firebaseapp.com",
    projectId: "library-managmentsystem-bb919",
    storageBucket: "library-managmentsystem-bb919.firebasestorage.app",
    messagingSenderId: "1050005051025",
    appId: "1:1050005051025:web:cea765715445b299c6d130",
    measurementId: "G-P7N2EEXRVM"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const novelsRef = db.collection("novels");
  
  const tableBody = document.getElementById("novelTable");
  const searchInput = document.getElementById("searchInput");
  const yearFilter = document.getElementById("yearFilter");
  const sortPrice = document.getElementById("sortPrice");
  
  function renderTable(docs) {
    tableBody.innerHTML = "";
    docs.forEach(doc => {
      const novel = doc.data();
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${novel.title}</td>
        <td>${novel.author}</td>
        <td>${novel.genre}</td>
        <td>${novel.year}</td>
        <td>$${novel.price}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  async function fetchNovels() {
    let query = novelsRef;
  
    const year = yearFilter.value;
    if (year) query = query.where("year", ">=", Number(year));
  
    const sort = sortPrice.value;
    if (sort) query = query.orderBy("price", sort);
  
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
      query.get().then(snapshot => {
        const results = snapshot.docs.filter(doc => {
          const { title, author } = doc.data();
          return title.toLowerCase().includes(searchTerm) || author.toLowerCase().includes(searchTerm);
        });
        renderTable(results);
      });
    } else {
      const snapshot = await query.get();
      renderTable(snapshot.docs);
    }
  }
  
  searchInput.addEventListener("input", fetchNovels);
  yearFilter.addEventListener("change", fetchNovels);
  sortPrice.addEventListener("change", fetchNovels);
  
  fetchNovels();
  