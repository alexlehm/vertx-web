require 'vertx-web/auth_handler'
require 'vertx-web/routing_context'
require 'vertx-auth-common/auth_provider'
require 'vertx/util/utils.rb'
# Generated from io.vertx.ext.web.handler.BasicAuthHandler
module VertxWeb
  #  An auth handler that provides HTTP Basic Authentication support.
  class BasicAuthHandler
    include ::VertxWeb::AuthHandler
    # @private
    # @param j_del [::VertxWeb::BasicAuthHandler] the java delegate
    def initialize(j_del)
      @j_del = j_del
    end
    # @private
    # @return [::VertxWeb::BasicAuthHandler] the underlying java delegate
    def j_del
      @j_del
    end
    # @param [::VertxWeb::RoutingContext] arg0
    # @return [void]
    def handle(arg0=nil)
      if arg0.class.method_defined?(:j_del) && !block_given?
        return @j_del.java_method(:handle, [Java::IoVertxExtWeb::RoutingContext.java_class]).call(arg0.j_del)
      end
      raise ArgumentError, "Invalid arguments when calling handle(arg0)"
    end
    #  Add a required role for this auth handler
    # @param [String] role the role
    # @return [self]
    def add_role(role=nil)
      if role.class == String && !block_given?
        @j_del.java_method(:addRole, [Java::java.lang.String.java_class]).call(role)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling add_role(role)"
    end
    #  Add a required permission for this auth handler
    # @param [String] permission the permission
    # @return [self]
    def add_permission(permission=nil)
      if permission.class == String && !block_given?
        @j_del.java_method(:addPermission, [Java::java.lang.String.java_class]).call(permission)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling add_permission(permission)"
    end
    #  Add a set of required roles for this auth handler
    # @param [Set<String>] roles the set of roles
    # @return [self]
    def add_roles(roles=nil)
      if roles.class == Set && !block_given?
        @j_del.java_method(:addRoles, [Java::JavaUtil::Set.java_class]).call(Java::JavaUtil::LinkedHashSet.new(roles.map { |element| element }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling add_roles(roles)"
    end
    #  Add a set of required permissions for this auth handler
    # @param [Set<String>] permissions the set of permissions
    # @return [self]
    def add_permissions(permissions=nil)
      if permissions.class == Set && !block_given?
        @j_del.java_method(:addPermissions, [Java::JavaUtil::Set.java_class]).call(Java::JavaUtil::LinkedHashSet.new(permissions.map { |element| element }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling add_permissions(permissions)"
    end
    #  Create a basic auth handler, specifying realm
    # @param [::VertxAuthCommon::AuthProvider] authProvider the auth service to use
    # @param [String] realm the realm to use
    # @return [::VertxWeb::AuthHandler] the auth handler
    def self.create(authProvider=nil,realm=nil)
      if authProvider.class.method_defined?(:j_del) && !block_given? && realm == nil
        return ::VertxWeb::AuthHandlerImpl.new(Java::IoVertxExtWebHandler::BasicAuthHandler.java_method(:create, [Java::IoVertxExtAuth::AuthProvider.java_class]).call(authProvider.j_del))
      elsif authProvider.class.method_defined?(:j_del) && realm.class == String && !block_given?
        return ::VertxWeb::AuthHandlerImpl.new(Java::IoVertxExtWebHandler::BasicAuthHandler.java_method(:create, [Java::IoVertxExtAuth::AuthProvider.java_class,Java::java.lang.String.java_class]).call(authProvider.j_del,realm))
      end
      raise ArgumentError, "Invalid arguments when calling create(authProvider,realm)"
    end
  end
end
