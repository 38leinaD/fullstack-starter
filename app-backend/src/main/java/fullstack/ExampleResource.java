package fullstack;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.metrics.annotation.Counted;
import org.eclipse.microprofile.metrics.annotation.Timed;

@RequestScoped
@Path("/hello")
public class ExampleResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @Counted(name = "helloCount", absolute = true, description = "Number of times the hello() method is requested")
	@Timed(name = "helloRequestTime", absolute = true, description = "Time needed to get the hello-message")
    public String hello(@QueryParam("name") String name) {
        final String greeting = "Hello " + name + "!";
        System.out.println("Sending greeting: " + greeting);
    	return greeting;
    }
}