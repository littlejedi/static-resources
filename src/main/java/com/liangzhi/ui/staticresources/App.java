package com.liangzhi.ui.staticresources;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

import com.bazaarvoice.dropwizard.assets.ConfiguredAssetsBundle;
import com.liangzhi.ui.staticresources.health.AppHealthCheck;
import com.liangzhi.ui.staticresources.resources.AppResource;

public class App extends Application<AppConfiguration> {
    public static void main(String[] args) throws Exception {
        new App().run(args);
    }

    @Override
    public void initialize(Bootstrap<AppConfiguration> bootstrap) {
        bootstrap.addBundle(new ConfiguredAssetsBundle("/assets", "/resources"));
    }

    @Override
    public void run(AppConfiguration configuration,
                    Environment environment) throws ClassNotFoundException {
        environment.healthChecks().register("healthcheck", new AppHealthCheck());
        environment.jersey().register(new AppResource());
    }
}
