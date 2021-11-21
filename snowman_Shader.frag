
// Shader-ul de fragment / Fragment shader  
 
 #version 400

in vec4 ex_Color;
uniform int codCol;
 
out vec4 out_Color;

void main(void)
  {
	if ( codCol==0 )
		out_Color = ex_Color;
	if ( codCol==1 )
		out_Color=vec4 (0.65, 0.8, 0.9, 0.0);
	if ( codCol==2 )
		out_Color=vec4 (1.0, 1.0, 1.0, 0.0);
		//out_Color=vec4 (0.4, 0.6, 0.85, 0.0);
	if ( codCol==3 )
		out_Color=vec4 (0.0, 0.0, 0.0, 0.0);
	if ( codCol==4 )
		out_Color=vec4 (1.0, 0.5, 0.0, 0.0);

  }
 