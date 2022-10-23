(() => {
  type UserID = number | string | boolean;
  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'S';
  shirtSize = 'XL';

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(userId.charCodeAt(0) + size);
    }
    return userId;
  }

  greeting(true, 'M');
  greeting(222, 'M');
  userId = greeting('sdgf', 'M');
})();
