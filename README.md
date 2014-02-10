# render

Simplest Template Engine.

## API

```javascript
render(templateStr, dataModel);
```

**arguments**

- `templateStr` - 模板字符串
- `dataModel` - 数据对象

## Usage

```html
<div id="box">
    <p>My name is {{user.name}}, {{user.age}} years old.</p>
</div>
```

```javascript
var tmpl = document.querySelector('#box').innerHTML,
    data = {
        user: {
            name: 'basecss',
            age: 23
        }
    };

document.querySelector('#box').innerHTML = render(tmpl, data);
```

**output**

```html
<div id="box"><p>My name is basecss, 23 years old.</p>
```

**test**

[test](test.html)

