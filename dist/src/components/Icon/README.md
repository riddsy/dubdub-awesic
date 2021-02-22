### Icon

It's a subset of react-icons, so that you can just use Icon's and it's already got the best ones picked. Also, comes with a little styling via some variables etc.

## Example

```javascript
<Icon
  iconType='userlist'
  size={3.7}
  iconColor={'rgb(235, 235, 235)'}
  backgroundColor={'grey'}
  margin='auto'
  borderRadius='50%'
  padding={'2rem'}
/>
```

## Configs

# Icon Type

**Required**
_Type: List_
_Default: None_

List of icon names, check proptypes

# Size

_Type: Number_
_Default: 1_

Number of REMs - has to be rems, for font size of icon

# iconColor

_Type: String_
_Default: Black_

Color for the icon itself, can be a css colour, hex, rgb, rgba anything that you'd normally stick in color

# backgroundColor

_Type: String_
_Default: ''_

Color for the background, leaf off if you don't want one; can be a css colour, hex, rgb, rgba anything that you'd normally stick in color

# margin

_Type: String_
_Default: auto_

A string which goes right into the css margin property. Leave it blank and it'll set to auto

# borderRadius

_Type: String_
_Default: ''_

A string, so can be rem, px or % - do 50% for a circle

# padding

_Type: String_
_Default: '0.25rem'_

goes right into css, so put whatever you like, px, rem, ems etc.
