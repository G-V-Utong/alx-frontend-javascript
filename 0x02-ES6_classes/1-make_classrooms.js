import ClassRoom from './0-classroom';

export default function initializeRooms() {
//   const smallSize = new ClassRoom(19);
//   const midSize = new ClassRoom(20);
//   const largeSize = new ClassRoom(34);
  const roomSizes = [19, 20, 34];
  const classrooms = roomSizes.map((size) => new ClassRoom(size));
  const formattedClassrooms = classrooms.map((room) => (
    `ClassRoom { _maxStudentsSize: ${room._maxStudentsSize} }`));
  return formattedClassrooms;

//   return [
//     `ClassRoom { _maxStudentsSize: ${smallSize._maxStudentsSize} },
//   ClassRoom { _maxStudentsSize: ${midSize._maxStudentsSize} },
//   ClassRoom { _maxStudentsSize: ${largeSize._maxStudentsSize} }`
//    ]
}

console.log(initializeRooms());
