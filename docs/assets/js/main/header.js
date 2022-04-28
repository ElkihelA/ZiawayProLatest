function loadHeader() {
  var headerHTML = `<div class="brand mr-md">
  <a href="#">Gull React</a>
  <small>v1.0.0</small>
</div>
<button type="button" class="sidebar-toggle btn rounded-circle btn-raised btn-raised-default btn-icon" aria-label="Close">
  <i class="ti-menu"></i>
  <i class="ti-close"></i>
</button>
<span class="flex-grow-1"></span>
<a href="http://gull-react.ui-lib.com/" class="btn btn-link btn-link-secondary mr-md d-none d-sm-block">Live Preview</a>
<a href="http://githubaccess.ui-lib.com/" class="btn btn-link btn-link-secondary mr-md d-none d-sm-block">Request GitHub Access</a>

<a href="" class="btn btn-raised btn-raised-success">Buy</a>`;

  $(".doc-header").html(headerHTML);

  // Collapsible sidebar
  $(".sidebar-toggle").on("click", function() {
    $(".wrapper").toggleClass("sidebar-open");
  });
}
