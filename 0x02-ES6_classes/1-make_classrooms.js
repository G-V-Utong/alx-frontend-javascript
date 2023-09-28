import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const classrooms = roomSizes.map((size) => new ClassRoom(size));
  const formattedClassrooms = classrooms.map((room) => (
    `ClassRoom { _maxStudentsSize: ${room._maxStudentsSize} }`));
  return formattedClassrooms;
}
