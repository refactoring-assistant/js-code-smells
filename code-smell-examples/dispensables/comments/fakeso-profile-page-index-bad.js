//Creating state variables for keeping track of the user whose profile is currently being shown.
const [user, setUser] = useState({});
const [usersTagsArrayLength, setUsersTagsArrayLength] = useState();

const [qlist, setQlist] = useState([]);

// useEffect(() => {
//     const fetchData = async () => {
//         let res = await getQuestionsByFilter(order, search);
//         setQlist(res || []);
//     };

//     fetchData().catch((e) => console.log(e));
// }, [order, search]);

//Calling this fetchProfile function only once when the page first loads
useEffect(() => {
  const fetchProfile = async () => {
    console.log("This is the profile to show", userIdToProfile);
    const userToProfile = await getUserById(userIdToProfile);
    if (userToProfile) {
      console.log(
        "Testing length of user's tags list",
        userToProfile.tags.length
      );
      setUsersTagsArrayLength(userToProfile.tags.length);
      setUser(userToProfile);
    }
  };

  fetchProfile();

  console.log("fetchProfile in profile page useEffect gets called");

  const fetchData = async () => {
    let res = await getQuestionsByFilter(order, search);
    setQlist(res || []);
  };

  fetchData().catch((e) => console.log(e));
}, [userIdToProfile, order, search]);