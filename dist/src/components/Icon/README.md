# Icon

It's a subset of react-icons, so that you can just use Icon's and it's already got the best ones picked. Also, comes with a little styling via some variables etc.

## Example

```javascript
<Icon
  icontype='userlist'
  size={3.7}
  iconcolor='rgb(235, 235, 235)'
  backgroundcolor='grey'
  margin='auto'
  borderradius='50%'
  padding='2rem'
/>
```

## StyledComponents Example

```javascript
<Icon
  icontype='user'
  size={12}
  iconcolor={`rgb(${theme.colors.primary[2]})`}
  backgroundcolor={`rgb(${theme.colors.neutral[4]})`}
  margin='auto'
  borderradius='50%'
  padding='2rem'
/>
```

# Configs

### Icon Type

List of icon names, check proptypes

### Size

Number of REMs - has to be rems, for font size of icon

### iconcolor

Color for the icon itself, can be a css colour, hex, rgb, rgba anything that you'd normally stick in color

### backgroundcolor

Color for the background, leaf off if you don't want one; can be a css colour, hex, rgb, rgba anything that you'd normally stick in color

### margin

A string which goes right into the css margin property. Leave it blank and it'll set to auto

### borderradius

A string, so can be rem, px or % - do 50% for a circle

### padding

goes right into css, so put whatever you like, px, rem, ems etc.

```

```
