// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
<<<<<<< HEAD

      <div class="chat">
        <div class="username">
          <%- username %>
        </div>
        <div>
          <%- text %>
        </div>
      </div>
=======
      <!--

      -->
      <div class="chat">
        <div
          class="username <%= Friends.isFriend(username) ? 'friend' : '' %>"
          data-username="<%- username %>">
          <%- username %>
        </div>
        <div><%- text %></div>
      </div>
      <!--
            -->
>>>>>>> 8dc803505335c41d4b311b502c48dace1fe4a23d
    `)

};