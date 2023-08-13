<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Varela&display=swap" rel="stylesheet">
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
      <!--
      <div class="soundbite">{{soundbite}}</div>
      -->

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
