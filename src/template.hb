<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Varela|Open+Sans|Ubuntu|Bebas+Neue&display=swap">
    <style type="text/css">
      {{{styles}}}
    </style>
    <title>
      {{name}} - {{title}}
    </title>
  </head>

  <body>
    <div class="top">
      <header>
        <aside>
          <div class="name">{{name}}</div>
          <div class="title">{{title}}</div>
        </aside>
      </header>
    </div>

    <ul class="contact">
      <li><a href="mailto:{{email}}">{{email}}</a></li>
      <li><a href="{{github}}">Github</a></li>
      <li><a href="{{linkedin}}">LinkedIn</a></li>
    </ul>

    <main>
      <div class="soundbite">{{soundbite}}</div>

      <h2>
        Overview
      </h2>
      <p>
        {{description}}
      </p>

      {{{markdown}}}
    </main>

    {{#if pdf}}
      <div class="alternative pdf">
        <a href="{{cvHtmlPath}}">
          View online
        </a>
      </div>
    {{else}}
      <div class="alternative web">
        <a href="{{cvPdfPath}}">
          View as PDF
        </a>
      </div>
    {{/if}}

    {{{livereload}}}
  </body>
</html>
