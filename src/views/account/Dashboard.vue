<template>

  <div class="row g-3">
    <div v-for="i in 3" class="col-lg-4">
      <div class="card shadow">
        <div class="card-body">
          Information #{{ i }}
          <i class="float-end " :class="'bi bi-' + i + '-circle-fill'"> </i>
          <div style="font-size: 3rem;">
            {{ 20 + i }}
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-8">
      <div class="card h-100">
        <div class="card-header bg-transparent fw-bold border-0 py-3">
          Table
          <button class="btn btn-sm btn-custom float-end">
            Action
          </button>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th v-for="clm in 4" class="fw-bold" :key="clm">COLUMN {{ clm }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="rw in 3" :key="rw">
                  <td v-for="col in 4" :key="col">Row{{ rw }} Col{{ col }}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card h-100">
        <div class="card-body">
          <vue-writer :array="[`Vue-writer, A Vue 3 component that simulates typing, and erasing text. The content has to be in an array even if it's a single string.
            By default, this will loop forever unless you specify. the delay prop controls how long the current word in the array will appear on the screen before it deletes and begins typing the next word.
            (The higher the number the slower the typing speed is.)`]" :delay="1000" :start="500" :eraseSpeed="50"
            :typeSpeed="50" />

        </div>
      </div>
    </div>
  </div>
</template>
