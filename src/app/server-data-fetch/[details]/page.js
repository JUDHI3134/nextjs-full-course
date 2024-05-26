
const fetchUserDetails = async (currentUserId) =>{
     try {
       const apiResponse = await fetch(`http://dummyjson.com/users/${currentUserId}`) 

       const result = apiResponse.json()
       return result;
     } catch (error) {
        throw new Error(error)
     }
}

const UserDetails =async ({params}) => {
    const userDetails = await fetchUserDetails(params.details)
  return (
    <div>
      <h1>User details Page</h1>
      <p>Name : {userDetails?.firstName} {userDetails?.lastName}</p>
      <p> Email : {userDetails?.email}</p>
      <p>Phone  :{userDetails?.phone}</p>
      <p>Age  :{userDetails?.age}</p>
      <p>DOB  :{userDetails?.birthDate}</p>
    </div>
  )
}

export default UserDetails
