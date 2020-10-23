document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("table").forEach(function(table) {
        new Tablesort(table)
        table.classList.add("docutils");
    });
  });