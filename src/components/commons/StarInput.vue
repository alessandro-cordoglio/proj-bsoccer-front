<script>
export default {
  name: "StarInput",
};
</script>

<template>
  <div class="stars">
    <input class="d-none" type="radio" name="stars" id="star-null" />
    <input
      class="d-none"
      type="radio"
      name="stars"
      id="star-1"
      value="1"
      v-model="this.store.rating"
    />
    <input
      class="d-none"
      type="radio"
      name="stars"
      id="star-2"
      value="2"
      v-model="this.store.rating"
    />
    <input
      class="d-none"
      type="radio"
      name="stars"
      id="star-3"
      value="3"
      v-model="this.store.rating"
    />
    <input
      class="d-none"
      type="radio"
      name="stars"
      id="star-4"
      value="4"
      v-model="this.store.rating"
      checked
    />
    <input
      class="d-none"
      type="radio"
      name="stars"
      id="star-5"
      value="5"
      v-model="this.store.rating"
    />

    <section>
      <label for="star-1">
        <svg width="255" height="240" viewBox="0 0 51 48">
          <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
        </svg>
      </label>
      <label for="star-2">
        <svg width="255" height="240" viewBox="0 0 51 48">
          <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
        </svg>
      </label>
      <label for="star-3">
        <svg width="255" height="240" viewBox="0 0 51 48">
          <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
        </svg>
      </label>
      <label for="star-4">
        <svg width="255" height="240" viewBox="0 0 51 48">
          <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
        </svg>
      </label>
      <label for="star-5">
        <svg width="255" height="240" viewBox="0 0 51 48">
          <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
        </svg>
      </label>
      <label for="star-null"> Clear </label>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// select the svg element
$svg: "";
// select the path
$path: "";
// for each radio
@for $i from 1 through 5 {
  // for each valid star
  @for $x from 1 through $i {
    // add checked input to selectors
    $svg: $svg + "#star-#{$i}:checked ~ ";
    $path: $path + "#star-#{$i}:checked ~ ";
    // add svg or path element sib to selectors
    // scope = section label svg [path]
    $svg: $svg + "section [for='star-#{$x}'] svg";
    $path: $path + "section [for='star-#{$x}'] svg path";
    // if not the last, we add a comma
    @if $x != $i {
      $svg: $svg + ", ";
      $path: $path + ", ";
    }
  }
  // if not the last, we add the comma
  @if $i != 5 {
    $svg: $svg + ", ";
    $path: $path + ", ";
  }
}

// style the active svg
#{$svg} {
  transform: scale(1);
}
// style the active path
#{$path} {
  fill: #ffbb00;
  stroke: darken(#ffbb00, 10%);
}
.stars {
  position: relative;
}
section {
  width: 300px;
  text-align: center;
  position: absolute;
}

label {
  display: inline-block;
  width: 50px;
  text-align: center;
  cursor: pointer;
  svg {
    width: 100%;
    height: auto;
    fill: white;
    stroke: #ccc;
    transform: scale(0.8);
    transition: transform 200ms ease-in-out;
    path {
      transition: fill 200ms ease-in-out, stroke 100ms ease-in-out;
    }
  }
}

label[for="star-null"] {
  display: block;
  margin: 0 auto;
  color: #999;
}

body {
  text-align: center;
  background: #f0f0f0;
}

input {
  margin-top: 1rem;
}
</style>
