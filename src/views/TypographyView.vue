<script setup>
import WidgetCard from "../components/ui/WidgetCard.vue";
</script>

<template>
  <main class="main-content">
    <h1 class="page-title">Typography <small>Text & display styles</small></h1>

    <div class="row">
      <div class="col col-6">
        <WidgetCard title="Headings" eyebrow>
          <h6 class="section-label">Default headings</h6>
          <div class="sample-box">
            <div class="row">
              <div class="col col-6">
                <h1>h1. Heading</h1>
                <h2>h2. Heading</h2>
                <h3>h3. Heading</h3>
                <h4>h4. Heading</h4>
                <h5>h5. Heading</h5>
                <h6>h6. Heading</h6>
              </div>
              <div class="col col-6">
                <h1 class="text-danger">h1. Heading</h1>
                <h2 class="text-warning">h2. Heading</h2>
                <h3 class="text-success">h3. Heading</h3>
                <h4 class="text-primary">h4. Heading</h4>
                <h5 class="text-info">h5. Heading</h5>
                <h6 class="text-dark">h6. Heading</h6>
              </div>
            </div>
          </div>

          <h6 class="section-label">Customized headings</h6>
          <div class="sample-box">
            <h3>Headings <small>And some clarification text</small></h3>
          </div>

          <h6 class="section-label">Display</h6>
          <div class="sample-box">
            <p class="display display-1">Display 1</p>
            <p class="display display-2">Display 2</p>
            <p class="display display-3">Display 3</p>
          </div>

          <h6 class="section-label">Lead</h6>
          <div class="sample-box">
            <p class="lead">Light Blue is an admin dashboard template built for modern web apps.</p>
          </div>
        </WidgetCard>
      </div>

      <div class="col col-6">
        <WidgetCard title="Body Text" eyebrow>
          <h6 class="section-label">Basic text</h6>
          <div class="sample-box">
            <p>You can use the <code>mark</code> tag to <mark>highlight</mark> text.</p>
            <p><del>This line of text is meant to be treated as deleted text.</del></p>
            <p><ins>This line of text is meant to be treated as an addition.</ins></p>
            <p><small>This line of text is meant to be treated as fine print.</small></p>
            <p><em>This line is rendered as italicized text.</em></p>
            <p><strong>This line is rendered as bold text.</strong></p>
          </div>

          <h6 class="section-label">Font weights</h6>
          <div class="sample-box">
            <p class="fw-thin">Thin font weight</p>
            <p class="fw-normal">Normal font weight</p>
            <p class="fw-semi">Semi bold to emphasize important things</p>
            <p class="fw-bold">Bold font as a high priority</p>
          </div>

          <h6 class="section-label">Colors</h6>
          <div class="sample-box">
            <p class="text-danger">Some danger text</p>
            <p class="text-warning">Some warning text</p>
            <p class="text-success">Some success text</p>
            <p class="text-primary">Some primary text</p>
            <p class="text-info">Some info text</p>
          </div>

          <h6 class="section-label">Blockquote</h6>
          <div class="sample-box">
            <blockquote>
              <p>Great products are rarely built alone — they come from tight feedback loops, small iterations, and teams unafraid to throw away yesterday's assumptions.</p>
              <footer>Product Team Handbook</footer>
            </blockquote>
          </div>
        </WidgetCard>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-content {
  margin-left: 224px;
  margin-top: 64px;
  padding: 28px 30px 60px;
  width: calc(100% - 224px);
}
.page-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin: 0 0 24px;
}
.page-title small {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-gray);
  margin-left: 10px;
}

.section-label {
  margin: 22px 0 10px;
  font-size: 11px;
  font-weight: 700;
  color: var(--color-gray);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.section-label:first-child {
  margin-top: 0;
}
.sample-box {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 16px 18px;
}
.sample-box h1,
.sample-box h2,
.sample-box h3,
.sample-box h4,
.sample-box h5,
.sample-box h6 {
  margin: 0 0 8px;
  color: var(--color-text-dark);
}
.sample-box p {
  margin: 0 0 10px;
  font-size: 13px;
  color: var(--color-text);
}
.sample-box p:last-child {
  margin-bottom: 0;
}
.text-danger {
  color: var(--color-danger);
}
.text-warning {
  color: var(--color-warning);
}
.text-success {
  color: var(--color-success);
}
.text-primary {
  color: var(--color-primary);
}
.text-info {
  color: var(--color-info);
}
.text-dark {
  color: var(--color-text-dark);
}
.display {
  font-weight: 300;
  margin: 0 0 8px;
  color: var(--color-text-dark);
}
.display-1 {
  font-size: 42px;
}
.display-2 {
  font-size: 34px;
}
.display-3 {
  font-size: 28px;
}
.lead {
  font-size: 16px;
  font-weight: 300;
  color: var(--color-text-dark);
}
.fw-thin {
  font-weight: 300;
}
.fw-normal {
  font-weight: 400;
}
.fw-semi {
  font-weight: 600;
}
.fw-bold {
  font-weight: 700;
}
blockquote {
  margin: 0;
  padding-left: 16px;
  border-left: 3px solid var(--color-primary);
}
blockquote p {
  font-style: italic;
  color: var(--color-text-dark);
}
blockquote footer {
  font-size: 11.5px;
  color: var(--color-gray);
  margin-top: 6px;
}
</style>
