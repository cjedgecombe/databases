// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

<<<<<<< HEAD
  // TODO: Define how you want to store the list of rooms
  _data: null,
  sortedRooms: {},
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  sortRooms: function (data) {
    //loop through array of message objects
    for (message of data) {
      var currentRoomname = message.roomname;
      if (currentRoomname === null) {
        continue;
      } else if (!Rooms.sortedRooms.hasOwnProperty(currentRoomname)) {
        Rooms.sortedRooms[currentRoomname] = [];
        Rooms.sortedRooms[currentRoomname].push(message);
      } else {
        Rooms.sortedRooms[currentRoomname].push(message);
      }
    }
  }
=======

  _data: new Set,
>>>>>>> 8dc803505335c41d4b311b502c48dace1fe4a23d

  selected: 'lobby',

  items: function() {
    return _.chain([...Rooms._data]);
  },

  isSelected: function(roomname) {
    return roomname === Rooms.selected ||
           !roomname && Rooms.selected === 'lobby';
  },

  add: function(room, callback = ()=>{}) {
    Rooms._data.add(room);
    Rooms.selected = room;
    callback(Rooms.items());
  },

  update: function(messages, callback = ()=>{}) {
    var length = Rooms._data.size;

    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.add(room));

    if (Rooms.selected === null) {
      // make the first room the default selected room
      Rooms.selected = Rooms._data.values().next().value;
    }

    // only invoke the callback if something changed
    if (Rooms._data.size !== length) {
      callback(Rooms.items());
    }
  }
  
};