// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
<<<<<<< HEAD
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    RoomsView.$select.empty();
    // TODO: Render out the list of rooms. render out to the select drop down
    //get room names from sortedROoms object
    var roomNames = Object.keys(Rooms.sortedRooms);
    for (var i = 0; i < roomNames.length; i++) {
      var html = '<option class=roomName>' + roomNames[i] + '</option>';
      this.$select.append(html);
    }
    //loop over and insert each as option in select
    //<option> roomname </option>
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    MessagesView.render(Rooms.sortedRooms[roomname]);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    MessagesView.$chats.empty();
    RoomsView.renderRoom(RoomsView.$select.val());
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var newRoom = $('input:text').val();
    Rooms.sortedRooms[newRoom] = [];
    RoomsView.render();
  }
=======

    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
      },

  render: function() {

    RoomsView.$select.html('');
    Rooms
      .items()
      .each(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
      },

  renderRoom: function(roomname) {

    var $option = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($option);
      },

  handleChange: function(event) {

    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
      },

  handleClick: function(event) {

    var roomname = prompt('Enter room name');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
      }
>>>>>>> 8dc803505335c41d4b311b502c48dace1fe4a23d

};
