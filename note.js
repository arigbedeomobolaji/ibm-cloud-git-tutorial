const notes = [{title: "a", author: "b"}]
const getNotes = () => {
  try {
    return notes
  } catch (e){
    return []
}
}
